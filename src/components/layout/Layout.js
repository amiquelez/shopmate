import React from 'react';
import { Route } from 'react-router-dom';

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
                <Route path="/" exact component={Products} />
                <Route path="/category/:catId" component={Products} />
            </div>
        </div>
    )
}

export default Layout;