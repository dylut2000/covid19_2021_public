import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

function App() {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountryData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountryData();
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className='app'>
      <div className='app__header'>
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value={country} onChange={handleChange}>
            {countries.map((country) => (
              <MenuItem value={country.value} key={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
