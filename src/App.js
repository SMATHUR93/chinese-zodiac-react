import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import DataCarousel from './dataCarousel/dataCarousel';
import StartForm from './startForm/startForm';
// import NavigationBar from './navigationBar/navigationBar';
// import Content from './content/content';

class App extends Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header name='Shrek'></Header>
				<main role="main" className="flex-shrink-0">
					<div className="container">
						<div className="jumbotron text-center bgImage">
							<h1>My Bootstrap Page</h1>
							<p>Resize this responsive page to see the effect!</p> 
							<StartForm></StartForm>
						</div>
						<DataCarousel></DataCarousel>
					</div>
				</main>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
