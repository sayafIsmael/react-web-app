import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar"
import LoginPage from "./pages/login/loginContainer"
import VerificationPage from "./pages/verification"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import your route components too

function App() {
  return (
    <div className={`max-w-sm container mx-auto`}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
