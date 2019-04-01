import React from 'react';
import Header from '../header/Header';
import './Layout.css';
import Menu from '../menu/Menu';
import Products from '../products/Products';

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Menu />
                <Products />
            </div>
        </div>
    )
}

export default Layout;