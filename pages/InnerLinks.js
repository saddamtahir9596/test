import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import Links from '../components/InnerLinks/Links';
import innerLinksData from '../data/innerLinksData.json';

import { withRouter } from 'next/router'

import Head from 'next/head';

function InnerLinks(props) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <Links linkObj={props.innerLinkObj} linking={props.router.query.name}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}


export async function getStaticProps({props}) {
    let innerLinkObj = innerLinksData;
   
    return {
        props: {
            innerLinkObj   
        },
    }
}

export default withRouter(InnerLinks);