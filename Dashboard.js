import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/missions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMissions(res.data);
    };

    fetchMissions();
  }, []);

  return (
    <div>
      <h2>Your Missions</h2>
      {missions.map((mission) => (
        <div key={mission._id}>
          <h3>{mission.destination}</h3>
          <p>Risk Level: {mission.riskLevel}</p>
          <p>Departure: {mission.departureDate}</p>
          <p>Return: {mission.returnDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
