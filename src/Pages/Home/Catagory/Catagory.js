import React from 'react';
import land from '../../../assets/images/landphone.jpg'
import android from '../../../assets/images/android.png'
import iphone from '../../../assets/images/iphone.jpg'
import CatagoryCard from './CatagoryCard';
import Product from '../../Products/Product/Product';

const Catagory = () => {
    const catagoryData = [
        {
            id: 1,
            name: 'Land Phone',
            description: 'Land Phone is a type of old modal phone, which was popular in 90s world',
            img: land
        },
        {
            id: 2,
            name: 'Android Phone',
            description: 'Android phone is very popular smart phone for currebt ganaretion',
            img: android
        },
        {
            id: 3,
            name: 'IPhone',
            description: 'IPhone is a type of big budget phone, its popular in high class socity',
            img: iphone
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary'>Phone Catagory</h3>
                <h2 className='text-3xl'>Catagories we have</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    catagoryData.map(catagori => <CatagoryCard
                        key={catagori.id}
                        catagori={catagori}
                    ></CatagoryCard>)
                }

            </div>
            <div>
                <h2>Product</h2>
                <Product></Product>
            </div>
        </div>
    );
};

export default Catagory;