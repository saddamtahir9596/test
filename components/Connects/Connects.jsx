import React, { Component } from 'react';
import Banner from './Banner';
import Types from './Types';

import Head from 'next/head';

class Connects extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                    <Banner bannerObj={this.props.connectsObj.brands}/>
                    <Types typesObj={this.props.connectsObj.types}/>
                </main>
            </div>
            
        );
    }
}

export default Connects;