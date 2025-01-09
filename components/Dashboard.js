// components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await axios.get("/api/usage");
        setUsage(response.data);
      } catch (error) {
        console.error("Error fetching usage:", error);
        // Handle error appropriately
      }
    };

    fetchUsage();
  }, []);

  return (
    <div className="dashboard">
      <h2>Your API Usage</h2>
      {usage ? (
        <div>
          <p>API Calls Used: {usage.used}</p>
          <p>API Calls Remaining: {usage.remaining}</p>
        </div>
      ) : (
        <p>Loading usage data...</p>
      )}
    </div>
  );
};

export default Dashboard;
