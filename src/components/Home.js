import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <ScrollAnimation animateIn="animate__fadeInDown" duration="2">
                    <h1>Mohamed<br/>Kharaev</h1>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Home;