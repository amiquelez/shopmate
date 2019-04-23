import React from 'react';
import './Product.scss';
import PropTypes from 'prop-types';

const Product = props => {
    const {image, title, description, price} = props;

    if(!title) return null;

    return (
        <div className="single_product" data-test="singleProduct">
            <h4 className="title" data-test="titleProduct">{title}</h4>
            <img src={image} alt={title} data-test="imageProduct" />
            <p className="desciption" data-test="descriptionProduct">{description}</p>
            <span className="price" data-test="priceProduct">${price}</span>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desciption: PropTypes.string,
    price: PropTypes.number
}

export default Product;