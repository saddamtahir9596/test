import React, { Component } from 'react';

import Head from 'next/head';

class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: '',
            homeInfo: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setStats();
    }

    setStats = () => {
        this.setState({ stats: this.props.statsObj, homeInfo: this.props.homeInfoObj });
    }

    getHomeInfo = () => {
        let data = this.state.homeInfo;
        return (
            <div className="access-block">
                <div className="container">
                    <div className="info">
                        <h2>{data.heading}</h2>
                        <a href="#" className="btn">{data.btn1}</a>
                        <a href="#" className="btn full">{data.btn2}</a>
                    </div>
                    <div className="info-columns">
                        {data.cols.map((items, index) => {
                            return (
                                <div className="col" key={index}>
                                    <span className="title"><img src={items.image} alt="Image description" /> {items.title}</span>
                                    <p>{items.para}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    getStats = () => {
        let data = this.state.stats;
        return (
            <div className="stats-section">
                <div className="container">
                    <div className="head">
                        <span className="title">{data.title}</span>
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="cols">
                        {data.cols.map((items, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="img">
                                        <img src={items.image} alt="Image Description" />
                                    </div>
                                    <h3>{items.heading}</h3>
                                    <span>{items.number}</span>
                                    <strong>{items.type}</strong>
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
                {this.getStats()}
                {this.getHomeInfo()}
            </div>
        );
    }
}

export default Stats;