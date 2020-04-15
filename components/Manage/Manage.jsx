import React, { Component } from 'react';
import Banner from './Banner';
import Partners from './Partners';
import InfoBlocks from './InfoBlocks';

import Head from 'next/head';

class Manage extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                    <Banner bannerObj={this.props.managesObj.brand}/>
                    <Partners partnersObj={this.props.managesObj.partners}/>
                    <InfoBlocks infoObj={this.props.managesObj.infoBlocks}/>
                </main>
            </div>
            
        );
    }
}

export default Manage;