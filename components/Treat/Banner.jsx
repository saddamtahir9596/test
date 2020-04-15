import React, { Component } from 'react';

import Head from 'next/head';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBanner();
    }

    setBanner=()=> {
        this.setState({bannerData: this.props.bannerObj});
    }

    getBanner=()=> {
        let data = this.state.bannerData;
        return(
            <div className="textblock">
                <h1>{data.heading}</h1>
                <p>{data.para}</p>
                <a className="btn">{data.btn}</a>
                <a className="btn full">{data.btn1}</a>
                <em className="note">{data.notes}</em>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="visual" style={{backgroundImage: "url(images/img38.jpg)"}}>
                    <div className="container">
                        {this.getBanner()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;