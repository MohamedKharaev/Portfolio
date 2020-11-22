import React from 'react';
import ModalVideo from 'react-modal-video'
import "./Projects.css";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './Header';

class Projects extends React.Component {
	constructor () {
		super()
		this.state = {
			isOpen: false,
			DemoVideoID : ''
		}
		this.openModal = this.openModal.bind(this)
	}

	openModal (videoID) {
		this.setState({isOpen: true, DemoVideoID: videoID})
	}

    render() {
        return (
			<div>
			<Header text="projects"/>
			<ScrollAnimation animateIn="animate__fadeInDown" duration="1.5">
        	<div className="projects ui container">
				<div className="ui special cards">
				  <div className="ui centered card">
				    <div className="image hover-blur">
				      <img src="Snake-Card-Cover.png" />
				      <div className="middle">
				      	<button className="text" onClick={() => this.openModal('H9b_9cndCr8')}>View Demo</button>
				      </div>
				    </div>
				    <div className="content">
				      <p className="header">Snake AI</p>
				      <div className="meta">
				        <span>Machine learning agent that learns to play snake</span>
				      </div>
				    </div>
				    <div className="extra content">
				    	<a href='https://github.com/MohamedKharaev/Snake-AI'>Source Code</a>
				    </div>
				  </div>
				  <div className="ui centered card">
				    <div className="image hover-blur">
				      <img src="https://cdn1.iconfinder.com/data/icons/devops-cycle/256/devops_cycle_1_filled-512.png" />
				      <div className="middle">
				      	<button className="text" onClick={() => this.openModal('')}>View Demo</button>
				      </div>
				    </div>
				    <div className="content">
				      <p className="header">DevOps Project</p>
				      <div className="meta">
				        <span>Created production workflow for full stack app and deployed app to Google Cloud. <br /> *No Demo Currently*</span>
				      </div>
				    </div>
				    <div className="extra content">
				    	<a href='https://github.com/MohamedKharaev/multi-k8s'>Source Code</a>
				    </div>
				  </div>

				  {/*<div className="ui centered card">
				    <div className="image hover-blur">
				      <img src="Smart-Mirror-Card-Image.jpg" />
				      <div className="middle">
				      	<button className="text" onClick={() => this.openModal('')}>View Demo</button>
				      </div>
				    </div>
				    <div className="content">
				      <p className="header">Smart Mirror</p>
				      <div className="meta">
				        <span>Mirror with custom widgets and facial recognition. Made with Raspberry Pi</span>
				      </div>
				    </div>
				  </div>
				*/}

				  <div className="ui centered card">
				    <div className="image hover-blur">
				      <img src="Festy-Card-Image.png" />
				      <div className="middle">
				      	<button className="text" onClick={() => this.openModal('vr5f17_YS6M')}>View Demo</button>
				      </div>
				    </div>
				    <div className="content">
				      <p className="header">Festy</p>
				      <div className="meta">
				        <span>Android App that lets users plan out performances to visit with their friends at music festivals</span>
				      </div>
				    </div>
					<div className="extra content">
					  <a href='https://github.com/powerserg23/Festy'>Source Code</a>
					</div>
				  </div>

				  <div className="ui centered card">
				    <div className="image hover-blur">
				      <img src="Checkers-Card-Image.jpg" />
				      <div className="middle">
				      	<button className="text" onClick={() => this.openModal('qphOTpI8B1I')}>View Demo</button>
				      </div>
				    </div>
				    <div className="content">
				      <p className="header">Checkers AI</p>
				      <div className="meta">
				        <span>AI created to play checkers. Achieved 2nd place in 300 team competition</span>
				      </div>
				    </div>
					<div className="extra content">
				      <a href='https://github.com/MohamedKharaev/CS-171-AI'>Source Code</a>
				    </div>
				  </div>

				</div>

				<div>
		        	<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.DemoVideoID} onClose={() => this.setState({isOpen: false})} />
		        </div>
			</div>
			</ScrollAnimation>
			</div>
        );
    }
}

export default Projects;