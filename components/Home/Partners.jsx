import React, { Component } from 'react';

import Head from 'next/head';

class Partners extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partnerObj: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setPartnersObj();
    }

    setPartnersObj = () => {
        this.setState({ partnerObj: this.props.partnersObj });
    }

    getPartnerDef = () => {
        let data = this.state.partnerObj;
        return (
            <div className="container">
                <div className="intro">
                    <h1>{data.heading}</h1>
                    <p>{data.paragraph}</p>
                </div>
            </div>
        )
    }

    getPartnerLogos = () => {
        let data = this.state.partnerObj.logos;
        let logos = data.map((data, index) => {
            return (
                <li key={index}>
                    <img src={data.image} alt={data.image} />
                </li>
            )
        })
        return logos;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="partners">
                    {/* <div className="container">
                        <div className="intro">
                            <h1>Partner with the Most Complete Practice Management & EMR Solution in the Industry</h1>
                            <p>Aesthetic Record is trusted by practices of all sizes to manage patient interactions and day-to-day operations</p>
                        </div>
                    </div> */}
                    {this.getPartnerDef()}
                    <div className="logos-holder">
                        <div className="container">
                            <ul>
                                {this.getPartnerLogos()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;