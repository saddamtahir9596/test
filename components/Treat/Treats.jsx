import React, { Component } from 'react';
import Banner from './Banner';
import Records from './Records';

import Head from 'next/head';

class Treats extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                   <Banner bannerObj={this.props.treatsObj.brand}/>
                   <Records recordObj={this.props.treatsObj.records}/>
                </main>
            </div>
            
        );
    }
}

export default Treats;