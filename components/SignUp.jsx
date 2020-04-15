import React, { Component } from 'react';
import Head from 'next/head';

class SignUp extends Component {

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="signup-block">
                    <div className="container">
                        <div className="col">
                            <h2>14 Day Risk-Free Trial</h2>
                            <p>Dedicated Support & On-boarding</p>
                        </div>
                        <div className="col">
                            <a href="#" className="btn">Sign Up Today</a>
                            <p>No Hidden Set-Up Fees or Software Installation</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;