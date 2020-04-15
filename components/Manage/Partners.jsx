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
        this.setPartners();
    }

    setPartners = () => {
        this.setState({ partnerObj: this.props.partnersObj })
    }

    getPartners = () => {
        let data = this.state.partnerObj;
        return (
            <div className="partners">
                <div className="container">
                    <div className="intro">
                        <h1>{data.heading} </h1>
                        <p>{data.para}</p>
                    </div>
                </div>
                <div className="logos-holder">
                    <div className="container">
                        <ul>
                            {data.images.map((items, index)=>{
                                return(
                                    <li key={index}>
                                        <img src={items.img} alt="Image description" />
                                    </li>
                                )
                            })}               
                        </ul>
                    </div>
                </div>
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
                {this.getPartners()}
            </div>
        );
    }
}

export default Partners;