import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Login from "./components/Login/Login";
import Signup from "./components/Singup/Signup";

import UserDashboard from "./components/Dashboard/UserDashboard";
import AcknowledgmentPage from "./AcknowledgmentPage";
import UpdatePassword from "./pages/UpdatePassword";
import AdminDashboard from "./AdminDashboard";
import ResultPage from "./ResultPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/acknowledgmentPage" element={<AcknowledgmentPage/>} />
        <Route path="/forgot-password" element={<UpdatePassword/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
