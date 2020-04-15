import Header from '../components/Header';
import MarketIntro from '../components/Market/MarketIntro';
import MarketUser from '../components/Market/MarketUser';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import marketPlaceData from '../data/market.json';

import Head from 'next/head';

function MarketPlace(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <div>
                    <Header />
                    <main className="main">
                        <MarketIntro marketIntro={props.marketObj}/>
                        <MarketUser marketUser={props.marketObj.marketUser}/>
                    </main>
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


export default MarketPlace;