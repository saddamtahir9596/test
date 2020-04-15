import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Head from 'next/head';

class OurTeams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ourteams: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setTeamsObj();
    }

    setTeamsObj=()=> {
        this.setState({ourteams: this.props.teamObj.ourteams});
    }

    getTeamsObj=()=> {
        if(this.state.ourteams) {
            let teams = this.state.ourteams.map((data, index)=>{
                return(
                    <a className="box" key={index} onClick={()=>this.teamsData(data, index)}>
                        <div className="img">
                            <img src={data.image} alt="Image Description" />
                        </div>
                        <div className="holder">
                            <h4>{data.name}</h4>
                            <span className="designation">{data.designation} </span>
                            <span className="link">{data.readBio}<i className="icon-arrow-r"></i></span>
                        </div>
                    </a>
                )
            })
            return teams;
        }
    }

    teamsData=(data, index)=> {
        Router.push({ 
            pathname: '/detailsteam', query: {
                name: data.detailName, 
                designation: data.designation,
                backArrow: data.backArrows,
                leadership: data.seeLeadership,
                image: data.detailedImage,
                bio: data.detailedRole
            }
        });       
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="team">
                    <span className="img-shape-bottom">
                        <img src="images/icon-leaf-big.png" alt="Image description" />
                    </span>
                    <div className="container">
                        <h2>Our Team</h2>
                        <div className="boxes">
                            <span className="img-shape">
                                <img src="images/icon.png" alt="Image Description" />
                            </span>
                            {this.getTeamsObj()}
                            {/* <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img18.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Justin Harper</h4>
                                    <span className="designation">Founder & CEO </span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img19.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Tiphany Lopez</h4>
                                    <span className="designation">Chief Growth Officer </span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img20.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Victoria Adrian</h4>
                                    <span className="designation">Director of Sales</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img08.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Gannesh Kompella</h4>
                                    <span className="designation">Director of Technology</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img09.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Jazmenne KinCannon</h4>
                                    <span className="designation">Senior Sales Specialist</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img10.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Kelsey Orms</h4>
                                    <span className="designation">Senior Sales Specialist </span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img11.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Kennith Powell</h4>
                                    <span className="designation">Senior Sales Engineer</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img12.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Vivienne Echendu</h4>
                                    <span className="designation">Vender Relations Manager</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img13.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>JT Cothran</h4>
                                    <span className="designation">Business Process Specialist</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img14.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Isabelle McDowell</h4>
                                    <span className="designation">Mid-Market Sales Specialist</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img15.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Catherine McCauley</h4>
                                    <span className="designation">Sales Engineer</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="img">
                                    <img src="images/img16.jpg" alt="Image Description" />
                                </div>
                                <div className="holder">
                                    <h4>Nick Whatton</h4>
                                    <span className="designation">Sales Engineer</span>
                                    <span className="link">Read bio <i className="icon-arrow-r"></i></span>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeams;