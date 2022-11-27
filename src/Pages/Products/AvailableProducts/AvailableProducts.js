import React, { useEffect, useState } from 'react';
import ProductOption from './ProductOption';

const AvailableProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <p className='text-center text-primary'>Available Product</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductOption
                        key={product._id}
                        product={product}
                    ></ProductOption>)
                }

            </div>

        </div>
    );
};

export default AvailableProducts;