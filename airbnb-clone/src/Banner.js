import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';



function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            { showSearch && <Search /> }
            <div className='banner_search'>
                <Button className='banner_searchButton' variant='outlined' onClick={() => setShowSearch(!showSearch)
                }>
                    Search Dates</Button>
            </div>
            <div className='banner_info'>
                <h2>Get out and stretch your imagination</h2>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
