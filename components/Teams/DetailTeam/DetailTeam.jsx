import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Head from 'next/head';

class DetailTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailTeamObj: ''
        }
    }
    UNSAFE_componentWillMount() {
        this.setDetailTeamObj();
    }

    setDetailTeamObj = () => {
        this.setState({ detailTeamObj: this.props.detailTeamObj.url.query });
    }

    getDetailTeamObj = () => {
        if (this.state.detailTeamObj) {
            let data = this.state.detailTeamObj;
            return (
                <div className="team-detail">
                    <div className="container">
                        <div className="img-user">
                            <img src={data.image} alt="Justin Harper" />
                            <a className="back" onClick={()=>this.backToTeams()}><img src={data.backArrow} alt="Image description" /> See All Leadership</a>
                        </div>
                        <div className="textblock">
                            <div className="holder">
                                <h2>{data.name}</h2>
                                <span className="designation">{data.designation}</span>
                                <p>{data.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    backToTeams=()=> {
        Router.push({ pathname: '/teams' });
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main">
                    <ul className="breadcrumbs container">
                        <li><a >Home</a></li>
                        <li className="current"><a >Elevate by Aesthetic Record</a></li>
                    </ul>
                    {this.getDetailTeamObj()}
                </main>
            </div>
        );
    }
}

export default DetailTeam;