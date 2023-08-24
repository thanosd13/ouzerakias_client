import "./App.css";
import Maps from "./components/maps/Maps";
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
import FlagMenu from "./components/dropdown_menu/FlagMenu";
import Admin from "./components/admin/Admin";
import TestComponent from "./components/test/TestComponent";
import TestUseHooks from "./components/test/TestUseHooks";
import BasicHooks from "./components/hooks/BasicHooks";


function App() {
  
  const[isLogged, setIsLogged] = useState(localStorage.getItem('logged') === 'true');
  const[isOpen, setIsOpen] = useState(false);
  const[isOpenFlag, setIsOpenFlag] = useState(false);


  useEffect(() => {
    localStorage.setItem('logged', isLogged.toString());
  }, [isLogged]);

  return (
    <>
    <UserContext.Provider value={{isLogged, setIsLogged}}>
      <Router>
        <Navbar setIsOpen={setIsOpen} setIsOpenFlag={setIsOpenFlag} isOpenFlag={isOpenFlag} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <FlagMenu isOpenFlag={isOpenFlag} />
        <Routes>
          <Route path='/' element={<Home />} />   
          <Route path='/hooks' element={<BasicHooks />} />   
          <Route path='/maps' element={<Maps />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/token/:token' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/forgot_pass' element={<ResetPass />} />
          <Route path='/account' element={<Account />} />
          <Route path='/create_new_pass/:token' element={<CreateNewPass />} />                 
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/flag_menu' element={<FlagMenu />} />
          <Route path='/admin_platform' element={<Admin />} />
          <Route path='/test' element={<TestComponent />} />
          <Route path='/hooks' element={<TestUseHooks />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
