import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        const sortedCountries = response.data.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));
        setCountries(sortedCountries);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchCountries();
  }, []);

  return (

      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />

            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
            </Routes>
            
          </div>
        </div>
      </div>

  );
}

export default App;