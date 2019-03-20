import React, { Component } from 'react';
import './startForm.css';

class StartForm extends Component {
	render() {
		return (
			<form className="form">
                <div className="row form-group">
                    <div className="col">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your Name"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <label for="pwd">Date of Birth:</label>
                        <input type="date" className="form-control" id="date" name="date" placeholder="Date of Birth"/>
                    </div>
                    <div className="col">
                        <label for="pwd">Time of Birth:</label>
                        <input type="time" className="form-control" id="time" name="time" placeholder="Time of Birth"/>
                    </div>
                </div>
                <div className="row form-group">
                    <button className="btn btn-success col" type="submit">Search</button>
                </div>
            </form>
		);
	}
}

export default StartForm;
