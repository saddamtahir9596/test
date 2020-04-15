import React, { Component } from 'react';

import Head from 'next/head';


class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkObj: '',
            name: ''
        }
    }

    componentDidMount() {
        this.setLinkObj();
    }



    setLinkObj = () => {
        this.setState({ linkObj: this.props.innerObj });
    }

    getLinkObj = () => {
        let data = this.state.linkObj;
        return (
            <main className="main">

                <div className="main-banner" style={{ backgroundImage: "url(images/bg-shape2.svg)" }}>
                    <span className="shape-right"><img src={data.images} alt="Image description" /></span>
                    <div className="container">
                        <div className="textblock">
                            <h1>{data.heading}</h1>
                            <p>{data.para}</p>
                            <div className="btn-area">
                                <span className="shape-center"><img src={data.innerImage} alt="Image description" /></span>
                                <a href="#" className="btn">{data.btn}</a>
                                <a href="#" className="btn full">{data.btn1}</a>
                            </div>
                            <span className="note">{data.notes}</span>
                        </div>
                    </div>
                </div>
                <div className="full-image">
                    <span className="shape-left"><img src={data.fullImage} alt="Image Description" /></span>
                    <img src={data.anotherImage} alt="Image description" />
                </div>
            </main>
        )
    }

    render() {

        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                {this.getLinkObj()}

            </div>

        );
    }
}
export default Links;