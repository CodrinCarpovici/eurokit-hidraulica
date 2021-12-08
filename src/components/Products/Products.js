import React from 'react'
import './Products.scss'

import home2 from "../../assets/img/SphereHeader.jpg";

const Products = () => {
    return (
        <div id="products"> 
            <div className="products-wrapper text-center">
                <div className="img-wrapper">
                    <img src={home2}></img>
                </div>
            </div>
        </div>
    )
}

export default Products
