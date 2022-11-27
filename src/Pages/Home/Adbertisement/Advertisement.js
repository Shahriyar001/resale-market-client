import React from 'react';

const Advertisement = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h2 className='text-2xl font-bold'>Advertisement of product</h2>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;