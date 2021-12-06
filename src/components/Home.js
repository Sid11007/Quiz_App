import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App1</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/quiz">Start Quiz</Link></li>
                    </ul>
                </div>
            </section>

            <section>
            <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App2</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/quiz">Start Quiz</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;