import React, { Component } from 'react';

import Head from 'next/head';

class Records extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordsData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setRecords();
    }

    setRecords=()=> {
        this.setState({recordsData: this.props.recordObj});
    }

    getRecords=()=> {
        let records = this.state.recordsData.map((data, index)=> {
            return(
                <div className="container">
                    <div className="img">
                        <img src={data.image} alt="Image Description" />
                    </div>
                    <div className="textblock">
                        <div className="holder">
                            <h2>{data.heading}</h2>
                            <p>{data.para}</p>
                            <a className="more">{data.learn}</a>
                        </div>
                    </div>
                </div>
            )
        })
        return records;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="info-blocks">
                    {this.getRecords()}
                </div>
            </div>
        );
    }
}

export default Records;