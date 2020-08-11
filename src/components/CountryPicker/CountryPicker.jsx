import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';
const CountryPicker = ( {handleCountryChange}) =>{
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect( () =>{

        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries])
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="Vietnam" onChange={ (e) => handleCountryChange(e.target.value)}>
               <option value="Vietnam">Việt Nam</option>
               <option value="">Global</option>
                {fetchedCountries.map( (country, i )=> {
                    return (country !== 'Vietnam') && <option key={i} value={country}>{country}</option>}
                )}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;