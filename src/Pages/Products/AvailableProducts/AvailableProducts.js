import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import ProductOption from './ProductOption';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-primary'>Available Product</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductOption
                        key={product._id}
                        product={product}
                        setPhone={setPhone}
                    ></ProductOption>)
                }

            </div>
            {
                phone &&
                <BookingModal
                    phone={phone}
                    setPhone={setPhone}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableProducts;