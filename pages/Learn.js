import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import LearningCards from '../components/LearningCards';


import Head from 'next/head';

function Learn() {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <LearningCards />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}


  
export default Learn;