// pages/dashboard.js
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => (
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
);

export default DashboardPage;
