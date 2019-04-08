import React from 'react';
import './Header.css';
import SearchBar from '../search-bar/SearchBar';

const Header = () => {
    return (
        <header>
            <h1>Shopmate</h1>
            <nav>
                <ul>
                    <li>Women</li>
                    <li>Man</li>
                    <li>Kids</li>
                    <li>Shoes</li>
                    <li>Brands</li>
                </ul>
            </nav>
            <SearchBar />
            <i className="fas fa-shopping-bag"></i>
        </header>
    );
}

export default Header;