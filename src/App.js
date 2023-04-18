import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import wikiCountries from './countries.json';

function App() {
  const [countries, setCountries] = useState(wikiCountries);

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