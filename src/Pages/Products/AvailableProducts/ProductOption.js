import React from 'react';

const ProductOption = ({ product, setPhone }) => {
    const { name, location, resale, original, use, time, saler, img } = product;
    return (
        <div className="card shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Location: {location}</p>
                <div className='flex justify-between'>
                    <p>Price: ${resale}</p>
                    <p>Market: ${original}</p>
                </div>
                <p>Used time: {use}</p>
                <p>publish: {time} </p>
                <p>Seller: {saler}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setPhone(product)}
                    >Book now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductOption;