import Header from '../components/Header';
import PricePlan from '../components/PricePlan/PricePlan';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import marketPlaceData from '../data/market.json';

import Head from 'next/head';

function PricePlans(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <div>
                    <Header />
                    <PricePlan />
                    <SignUp />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
  
export async function getStaticProps({}) {
    let marketObj = marketPlaceData;
    return {
        props: {
            marketObj,
        },
    }
}


export default PricePlans;