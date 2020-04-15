import Header from '../components/Header';
import Manage from '../components/Manage/Manage';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import manageData from '../data/manage.json';

import Head from 'next/head';

function Manages(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <Manage managesObj={props.manageObj}/>
                <SignUp />
                <Footer />           
            </div>
        </div>
    )
}
  
export async function getStaticProps({}) {
    let manageObj = manageData;
    return {
        props: {
            manageObj,
        },
    }
}


export default Manages;