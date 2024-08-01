
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./page/auth/SignIn";
import SignUp from "./page/auth/SignUp";
import Home from "./page/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./page/Dashborad/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />


          <Route element={<PrivateRoute/>}>
             <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
