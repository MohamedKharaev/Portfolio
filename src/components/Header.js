import React from 'react';
import './Header.css';
import ScrollAnimation from 'react-animate-on-scroll'

const Header = (props) => {
    return (
    <div>
        <ScrollAnimation animateIn="animate__fadeInDown">
            <div className="ui row">
                <div className="header-container">
                <h1>{props.text}</h1>
                </div>
            </div>
        </ScrollAnimation>
    </div>);
}

export default Header;