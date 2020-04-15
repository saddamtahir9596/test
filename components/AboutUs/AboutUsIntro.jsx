import React, { Component } from 'react';
import Head from 'next/head';

class AboutUsIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setIntroData();
    }

    setIntroData = () => {
        this.setState({ introData: this.props.aboutUsIntro });
    }

    getIntroData = () => {
        if (this.state.introData) {
            let data = this.state.introData;
            
            return (
                <div>
                    <div className="banner">
                        <div className="container">
                            <img src={data.bannerImage} alt="Image Description" />
                            <span className="img-shape">
                                <img src={data.bannerLeafImage} alt="image description" />
                            </span>
                        </div>
                    </div>
                    <div className="intro">
                        <span className="img-shape">
                            <img src={data.bannerSmallLeafImage} alt="image description" />
                        </span>
                        <h1>{data.heading}</h1>
                        <p>{data.detailFirst}</p>
                        <p>{data.detailSecond}</p>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                {this.getIntroData()}
            </div>
        );
    }
}

export default AboutUsIntro;