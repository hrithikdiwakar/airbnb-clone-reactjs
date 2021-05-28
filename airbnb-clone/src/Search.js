import React, { useState } from 'react';
import './Search.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'; //theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';


function Search() {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    }

    function handleSelect(ranges)  {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }

    return (
        <div className='search '>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>
                Number of guests
                <PeopleIcon />
            </h2> 
            <input placeholder="Enter guests" min={0} defaultValue={2} type="number" />
            <Button > Search   Airbnb</Button> 
            
            
        </div>
    )
}

export default Search
