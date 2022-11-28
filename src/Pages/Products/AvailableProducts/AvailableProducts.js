import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import ProductOption from './ProductOption';

const AvailableProducts = () => {
    const [phone, setPhone] = useState(null);

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-theta.vercel.app/products');
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

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