import React, { useEffect, useState } from 'react';

import axios from 'axios';


import { API_PRODUCT } from '../../API/Product.API';

import Product from '../Product/Product';
import './ListProducts.css';

function ListProduct() {
    const [products, setProducts] = useState([])
    const categories = (window.location.href).split('/');
    const category = categories[categories.length - 1];

    useEffect(() => {
        if (category === "") {

            axios.get(API_PRODUCT)
                .then(res => {
                    setProducts(products.concat(res.data))
                })


        } else if (category === 'clothing') {

            axios.get(API_PRODUCT + "/category/men's closthing")
                .then(res => {
                    setProducts(products.concat(res.data))
                })
            axios.get(API_PRODUCT + "/category/women's closthing")
                .then(res => {
                    setProducts(products.concat(res.data))
                })

        } else {

            axios.get(API_PRODUCT + "/category/" + category)
                .then(res => {
                    setProducts(products.concat(res.data))
                })

        }


    }, []);
    console.log(products);
    return (
        <div className="listProducts">
            {
                products.map(item => <Product
                    key={item.id}
                    product={item}
                />)
            }
        </div>
    )
}

export default ListProduct
