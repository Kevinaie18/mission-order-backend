import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MissionForm = () => {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        '/api/missions/create',
        { destination, departureDate, returnDate, riskLevel },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      history.push('/dashboard');
    } catch (err) {
      console.error('Error creating mission:', err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Create Mission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Departure Date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Risk Level (1-5)"
          value={riskLevel}
          onChange={(e) => setRiskLevel(e.target.value)}
          required
        />
        <button type="submit">Create Mission</button>
      </form>
    </div>
  );
};

export default MissionForm;
