import React, { Component } from 'react';
import './dataCarousel.css';

import Img1 from '../assets/images/01.jpg';
import Img2 from '../assets/images/02.jpg';
import Img3 from '../assets/images/03.jpg';

class DataCarousel extends Component {
	render() {
		return (
			<div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} alt="POLO" width="1100" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} alt="YOLO" width="1100" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} alt="AOLO" width="1100" height="500"/>
                    </div>

                    {/* <div className="carousel-item active">
                        <div class="card shadow-sm">
                            <img className="Boar" alt="POLO" width="500" height="500"/>
                            <div class="card-body">
                                <p class="card-text">This POLO content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="card shadow-sm">
                            <img className="Dog" alt="YOLO" width="500" height="500"/>
                            <div class="card-body">
                                <p class="card-text">This YOLO content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="card shadow-sm">
                            <img className="Dragon" alt="AOLO" width="500" height="500"/>
                            <div class="card-body">
                                <p class="card-text">This AOLO content. This content is a little bit longer.</p>
                            </div>
                        </div>
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
