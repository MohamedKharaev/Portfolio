import React from 'react';
import './BottomBar.css';

class BottomBar extends React.Component {
	render () {
		return (
			<div className="BottomBar">
				<p>
				<a href="https://github.com/MohamedKharaev"><i className="devicon-github-plain"></i></a>
    			&nbsp;&nbsp;&nbsp;
    			<a href="https://www.linkedin.com/in/mohamedkharaev/"><i className="devicon-linkedin-plain"></i></a>
    			</p>
    		</div>
    	);
    };
};

export default BottomBar;