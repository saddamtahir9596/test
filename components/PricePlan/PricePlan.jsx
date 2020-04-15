import React, { Component } from 'react';
import BreadCrumbs from './BreadCrumbs';
import Pricing from './Pricing';
import Head from 'next/head';

class PricePlan extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                    <BreadCrumbs />
                    <Pricing />
                </main>
            </div>
            
        );
    }
}

export default PricePlan;