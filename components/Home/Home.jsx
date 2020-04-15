import React, { Component } from 'react';
import Banner from './Banner';
import Partners from './Partners';
import InfoBlocks from './InfoBlocks';
import CustomerServices from './CustomerServices';
import Stats from './Stats';

import Head from 'next/head';

class Home extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                    <Banner />
                    <Partners partnersObj={this.props.homePageObj.partners}/>
                    <InfoBlocks InfoObj={this.props.homePageObj.info}/>
                    <CustomerServices customerObj={this.props.homePageObj.customerservices}/>
                    <Stats statsObj={this.props.homePageObj.stats} homeInfoObj={this.props.homePageObj.homeInfo}/>
                </main>
            </div>
            
        );
    }
}

export default Home;