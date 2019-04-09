import React from 'react';
import './Product.scss';

const Product = props => {
    const {image, title, description, price} = props;
    return (
        <div className="single_product">
            <h4 className="title">{title}</h4>
            <img src={image} alt={title} />
            <p className="desciption">{description}</p>
            <span className="price">${price}</span>
        </div>
    )
}

export default Product;