import React, { Component } from 'react';


import Head from 'next/head';

class BreadCrumbs extends Component {

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <ul className="breadcrumbs container">
                    <li><a href="#">Home</a></li>
                    <li className="current"><a href="#">Plans & Pricing</a></li>
                </ul>
            </div>
        );
    }
}

export default BreadCrumbs;