import React from 'react';
import './App.css';
import LoginPage from "./pages/login/loginContainer"
import VerificationPage from "./pages/verification"
import DashboardPage from "./pages/dashboard"
import NotificationsPage from "./pages/notifications"
import AccountPage from "./pages/account/create"
import SecureAccountPage from "./pages/account/secure"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import your route components too

function App() {

  const user = localStorage.getItem("user")

  return (
    <div className={`max-w-sm container mx-auto`}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/create-account" element={<AccountPage />} />
          <Route path="/secure-account" element={<SecureAccountPage />} />
          <Route
            path="*"
            element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
