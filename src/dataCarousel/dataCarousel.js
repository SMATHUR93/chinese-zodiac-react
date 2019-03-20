import React, { Component } from 'react';
import './dataCarousel.css';

import Img1 from '../assets/images/01.jpg';
import Img2 from '../assets/images/02.jpg';
import Img3 from '../assets/images/03.jpg';



class DataCarousel extends Component {
    
    renderCarouselTiles(symbols) {
        const tiles = [];
        symbols.forEach(function(symbol, i) {
            var className = 'carousel-item ' + ((i==0)?('active'):(''));
            tiles.push(
                <div className={className}>
                    <div className="card shadow-sm">
                        <img className={symbol} alt={symbol} width="500" height="500"/>
                        <div className="card-body">
                            <p className="card-text">This {symbol} content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            );
        });
        return tiles;
    }

    render() {
		return (
			<div id="demo" className="container carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">

                    {this.renderCarouselTiles(this.props.symbols)}
                    
                    {/* <div className="carousel-item active">
                        <img src={Img1} alt="POLO" width="1100" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} alt="YOLO" width="1100" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} alt="AOLO" width="1100" height="500"/>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
		);
	}
}

export default DataCarousel;
