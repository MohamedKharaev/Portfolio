import React from 'react';
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "./About.css";
import Header from './Header';

class About extends React.Component {
    render() {
        return (
            <div>
            <Header text="about"/>
            <ScrollAnimation animateIn="animate__fadeIn">
        	<div className="about">
        		<div className="ui container stackable grid">
        			<div className="ui row">
						<div className="column eight wide">
                            <div className="info">
                                <ScrollAnimation animateIn="animate__fadeInDown">
                                    UC Irvine Class of 2020<br />
                                    B.S. in Computer Science<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;- Specialization in ML/AI
                                </ScrollAnimation>
                            </div>
						</div>
                        <div className="column eight wide">
                            <ScrollAnimation animateIn="animate__fadeInDown">
                                <img alt="UC Irvine Logo" src="School Logo.png" className="grow logo"/>
                            </ScrollAnimation>
                        </div>
					</div>
                    <div className="ui row">
                        <div className="column eight wide">
                            <div className="info">
                            <ScrollAnimation animateIn="animate__fadeInDown" delay="250">
                                Allvoi Communications<br />
                                Full Stack Developer<br /> 
                                June 2020 - Present<br />
                                <a href="https://www.allvoi.com/">allvoi.com</a>
                            </ScrollAnimation>
                            </div>
                        </div>
                        <div className="column eight wide">
                            <ScrollAnimation animateIn="animate__fadeInDown" delay="250" className="icons">
                            <a href="https://www.allvoi.com/"><img src="Allvoi Logo.png" className="grow logo" /></a>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="ui row">
                        <div className="column eight wide">
                            <div className="info">
                            <ScrollAnimation animateIn="animate__fadeInDown" delay="500">
                                My goal as a software engineer is to write efficient,
                                clean code, and creating great user experiences. I am a full 
                                Stack Developer most recently
                                working with React.js, React Native, Python, and C++. 
                            </ScrollAnimation>
                            </div>
                        </div>
                        <div className="column eight wide">
                            <ScrollAnimation animateIn="animate__fadeInDown" delay="500" className="icons">
                                <img src="React-Logo.png" className="grow icon" />
                                <img src="C++-Logo.png" className="grow icon"/>
                                <img src="Python-Logo.png" className="grow icon"/>
                            </ScrollAnimation>
                        </div>
                    </div>	        		    	
        		</div>
        	</div>
            </ScrollAnimation>
            </div>
        );
    }
}

export default About;