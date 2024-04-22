import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));

    }, []);

    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <input 
                type="text" 
                className="search-input"
                placeholder="Search countries..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="clear-btn" onClick={() => setSearchTerm('')}>
              Clear
            </button>
            <div className='country-container'>
            {
                filteredCountries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
