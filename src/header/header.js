import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home </a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#">Page1 </a>
							</li>
						</ul>
						<div className="header-Text-Div">
							<h4 className="headerText">Welcome {this.props.name}</h4>	
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
