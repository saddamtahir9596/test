import DetailTeam from '../components/Teams/DetailTeam/DetailTeam';
import Header from '../components/Header';
import TeamsFooter from '../components/Teams/TeamsFooter';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

function DetailTeams(props) {
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <DetailTeam detailTeamObj={props}/>
                <TeamsFooter />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export default DetailTeams;