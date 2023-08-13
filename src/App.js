import "./App.css";
import Maps from "./components/maps/Maps";
import Cards from "./components/cards/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/sign_in/Login";
import SignUp from "./components/sign_up/SignUp";
import Sidebar from "./components/sidebar/SideBar";
import Account from "./components/account/Account";
import ResetPass from "./components/reset_pass/ResetPass";
import CreateNewPass from "./components/reset_pass/CreateNewPass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useState, useEffect } from "react";


function App() {
  
  const[isLogged, setIsLogged] = useState(localStorage.getItem('logged') === 'true');
  const[isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    localStorage.setItem('logged', isLogged.toString());
  }, [isLogged]);

  return (
    <>
    <UserContext.Provider value={{isLogged, setIsLogged}}>
      <Router>
        <Navbar setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path='/' element={<Home />} />   
          <Route path='/about' element={<Maps />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/token/:token' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/forgot_pass' element={<ResetPass />} />
          <Route path='/account' element={<Account />} />
          <Route path='/create_new_pass/:token' element={<CreateNewPass />} />                 
          <Route path='/sidebar' element={<Sidebar />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
