import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link'

class Header extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <Link href="/">
                                <a href="#"><img src="images/logo.png" alt="Aesthetic Record" /></a>
                            </Link>
                        </div>
                        <input type="checkbox" id="menu"/>
                        <label className="nav-opener" htmlFor="menu"><span></span></label>
                        <span className="overlay"></span>
                        <nav className="main-nav">
                                <ul>
                                    <li><a href="#">Features</a></li>
                                    <li>
                                        <Link href="/priceplans">
                                            <a href="#">Plans & Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/learn">
                                            <a>Learning Lab</a>
                                        </Link>
                                    </li>    
                                    <li>
                                        <Link href="/marketplace">
                                            <a>Marketplace</a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="user-info">
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#" className="btn">Start Free Trial</a></li>
                                </ul>
                            </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;