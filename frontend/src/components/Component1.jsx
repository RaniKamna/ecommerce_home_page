import '../App.css';
import axios from "axios";
import { useState } from 'react';

export const Searchbar = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const value = e.target;
        setValue(value);
        handleSearch(value);
    };

    const handleSearch = (value) => axios.get(`${value}`);

    return (
        <div className='searchdiv'>
            <input type="search" name="" id="searchbar" placeholder='Search Products' value={value} onChange={handleChange} />
            <button>Enter</button>
        </div>
    )
}