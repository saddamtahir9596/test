import React, { Component } from 'react';

import Head from 'next/head';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannersObj: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBannerObj();
    }

    setBannerObj=()=> {
        this.setState({bannersObj: this.props.bannerObj})
    }

    getBannerObj=()=> {
        let data = this.state.bannersObj;
        return(
            <div className="textblock">
                <h1>{data.heading}</h1>
                <p>{data.para}</p>
                <a href="#" className="btn">{data.btn}</a>
                <a href="#" className="btn full">{data.btn1}</a>
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
                <div className="visual" style={{ backgroundImage: "url(images/img33.jpg)" }}>
                    <div className="container">
                        {this.getBannerObj()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;