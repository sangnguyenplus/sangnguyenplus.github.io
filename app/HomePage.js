import React from 'react';
import './style/HomePage.css';

class HomePage extends React.Component{
	render(){
		return(
			<div className="home-page">
				<div className="avatar">
					<img src="assets/image/avatar-256x256.png"/>
				</div>
				<div className="description">
					<p className="name">Sang Nguyen</p>
					<p className="email">minhsang2603@gmail.com</p>
					<p className="bio">Full stack JS & PHP Developer in Ho Chi Minh City</p>
				</div>
				<div className="social-link">
					<span className="github"><a href="https://github.com/sangnguyenplus" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a></span>
					<span className="twitter"><a href="https://twitter.com/sangnguyenplus" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></span>
					<span className="facebook"><a href="https://facebook.com/sangnguyen2603" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></span>
				</div>
			</div>
		);
	}
}

export default HomePage
