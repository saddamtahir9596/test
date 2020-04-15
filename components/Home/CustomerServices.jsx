import React, { Component } from 'react';


import Head from 'next/head';

class CustomerServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setCustomerObj();
    }

    setCustomerObj = () => {
        this.setState({ customerData: this.props.customerObj });
    }

    getCustomerObj = () => {
        let data = this.state.customerData;
        return (
            <div className="partner-section">
                <div className="container">
                    <div className="head">
                        <span className="title">{data.title}</span>
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="four-columns">
                        {data.columns.map((items, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="img">
                                        <img src={items.image} alt="Image Description" />
                                    </div>
                                    <h4>{items.heading}</h4>
                                    <p>{items.para}</p>
                                </div>
                            )
                        })}
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
                {this.getCustomerObj()}
            </div>
        );
    }
}

export default CustomerServices;