import React from 'react';

const About = () => {
    return (
        <div className='mt-32'>
            <div className="hero min-h-screen p-10" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj0Z2yVSUQR1yxfAEbw2CXqAfTYaIAZ3JhQ&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">We provite a service which .</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;