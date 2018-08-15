import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Header.css';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <a href="home">
                        <img src={logo} className="my-logo" alt="logo" /> 
                    </a>
                </div>
                <Nav />
            </header>
        )
    }
}

export default Header;