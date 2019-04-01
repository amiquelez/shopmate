import React from 'react';
import Header from '../header/Header';
import './Layout.css';
import Menu from '../menu/Menu';

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <div>
                    NAV
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Layout;