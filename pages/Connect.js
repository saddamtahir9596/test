import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import Connects from '../components/Connects/Connects';

import connectData from '../data/connect.json';

import Head from 'next/head';

function Connect(props) {
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <Connects connectsObj={props.connectObj}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let connectObj = connectData;
    return {
        props: {
            connectObj,
        },
    }
}

export default Connect;