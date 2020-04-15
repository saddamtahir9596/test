import Header from '../components/Header';
import TeamsHeader from '../components/Teams/TeamsHeader';
import OurTeams from '../components/Teams/OurTeams';
import TeamsFooter from '../components/Teams/TeamsFooter';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import teamsData from '../data/teams.json';

import Head from 'next/head';

function Teams(props) {
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <main className="main">
                    <TeamsHeader />
                    <OurTeams teamObj={props.teamsObj}/>
                </main>
                <TeamsFooter />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let teamsObj = teamsData;
    return {
        props: {
            teamsObj,
        },
    }
}

export default Teams;