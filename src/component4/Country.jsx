import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountryData } from '../component1/store/Thunk/Countrythunk';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Country() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state?.Country?.countrysdata);
    console.log("country State:", data);
    
    useEffect(() => {
        dispatch(CountryData());
    }, [dispatch]);

    return (
        <div>
            <Button 
                variant="outlined" 
                className='buttons' 
                onClick={() => navigate("/")} 
                style={{marginBottom:"20px"}}
            >
                Next
            </Button>
            <br />
            {data && data.map((country, index) => (
                <div key={index} style={{margin: '20px', padding: '10px', border: '1px solid #ccc'}}>
                    <h2>{country.name.common}</h2>
                    <p>Official Name: {country.name.official}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Region: {country.region}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <img 
                        src={country.flags.png} 
                        alt={`Flag of ${country.name.common}`}
                        style={{width: '150px'}}
                    />
                </div>
            ))}
        </div>
    )
}

export default Country