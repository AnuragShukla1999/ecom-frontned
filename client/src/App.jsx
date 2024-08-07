
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./page/auth/SignIn";
import SignUp from "./page/auth/SignUp";
import Home from "./page/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./page/Dashborad/Dashboard";
import UserProfile from "./page/UserProfile";
import Layout from "./Layout/Layout";
import Navbar from "./components/Navbar";


function App() {

  return (
    <Layout>
      <BrowserRouter>

        <Navbar/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user-profile" element={<UserProfile/>} />


          <Route element={<PrivateRoute/>}>
             <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
