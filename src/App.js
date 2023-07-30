import "./App.css";
import About from "./components/about/About";
import Cards from "./components/cards/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar_two/Navbar";
import Login from "./components/sign_in/Login";
import SignUp from "./components/sign_up/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/' element={<Home />} />          
        </Routes>
      </Router>
    </>
  );
}

export default App;
