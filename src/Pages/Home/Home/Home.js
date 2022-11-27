import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div className='mx-5'>
            <h2>This is home</h2>
            <Banner></Banner>
            <Catagory></Catagory>
            <About></About>
        </div>
    );
};

export default Home;