import React, { useState } from 'react';
import './App.css';
import ListPlacesComponent from './components/ListPlacesComponent';

function App() {
  // State variables to store longitude, latitude, and radius
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [radius, setRadius] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add code here to send the data to your back-end
    // using Axios or any other HTTP client library
  };

  return (
    <div className="App">
      <h1>Nearby Places Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="radius">Radius (m):</label>
          <input
            type="text"
            id="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            required
          />
        </div>
        <div className="container">
      <ListPlacesComponent/>
      </div>
        <button type="submit">Search</button>
      </form>
    </div>
    
  );
}

export default App;
