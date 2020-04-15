import React, { Component } from 'react';


import Head from 'next/head';

class InfoBlocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoBlock: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setInfoBlocks();
    }

    setInfoBlocks = () => {
        this.setState({ infoBlock: this.props.InfoObj });
    }

    getConnects = () => {
        let data = this.state.infoBlock.connects;
        let connects = data.map((data, index) => {
            return (
                <div className="container" key={index}>
                    <div className="img">
                        <img src={data.image} alt="Image Description" />
                    </div>
                    <div className="textblock">
                        <div className="holder">
                            <h2>{data.heading}</h2>
                            <p>{data.paragraph}</p>
                            <ul className="info-list">
                                {data.lists.map((datas, index) => {
                                    return (
                                        <li key={index}>{datas.list}</li>
                                    )
                                })}
                            </ul>
                            <a className="more">{data.learnMore}</a>
                        </div>
                    </div>
                </div>
            )
        })
        return connects;
    }

    getGrowing=()=> {
        let data = this.state.infoBlock.record;
        return (
            <div className="information-section">
                <div className="col">
                    <img src={data.image} alt="Image description" />
                </div>
                <div className="col">
                    <div className="textblock">
                        <span className="title">{data.title}</span>
                        <h2>{data.heading}</h2>
                        <a className="btn">{data.btn}</a>
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
                <div className="info-blocks">
                    {this.getConnects()}
                </div>
                {this.getGrowing()}
            </div>
        );
    }
}

export default InfoBlocks;