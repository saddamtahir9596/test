import Home from '../components/Home/Home';
import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import Head from 'next/head';

import HomeData from '../data/home.json';

function HomeIndex(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <Home homePageObj={props.homeObj}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let homeObj = HomeData;
    return {
        props: {
            homeObj,
        },
    }
}

export default HomeIndex;