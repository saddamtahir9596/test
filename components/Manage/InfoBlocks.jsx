import React, { Component } from 'react';

import Head from 'next/head';

class InfoBlocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoBlocks: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setInfoBlocks();
    }

    setInfoBlocks=()=> {
        this.setState({infoBlocks: this.props.infoObj});
    }

    getInfoBlocks=()=> {
        let block = this.state.infoBlocks.map((data, index)=> {
            return(
                <div className="container" key={index}>
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
        return block;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="info-blocks">
                    {this.getInfoBlocks()}   
                </div>
            </div>
        );
    }
}

export default InfoBlocks;