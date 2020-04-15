import About from '../components/AboutUs/About';
import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

import aboutUs from '../data/aboutus.json';

function AboutUs(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <About aboutProp={props.aboutUsData}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let aboutUsData = aboutUs;
    return {
        props: {
            aboutUsData,
        },
    }
}

export default AboutUs;