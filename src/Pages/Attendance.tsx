// import {useState} from 'react';
import * as React from 'react';
import './dashboard.css';

function AttendanceComponent() {
	return (
		<>
			<div className="col-md-9 col-sm-9 col-lg-9"></div>
			<div className="col-md-3 col-sm-3 col-lg-3">
				<div className='row'>
					<div className="col-md-12 col-sm-12 col-lg-12">
						<div className="dash-widget clearfix card-box">
							<div className="dash-widget-info">
								<label>Attendance</label>
								<span> Ram </span>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className="col-md-12 col-sm-12 col-lg-12">
						<div className="dash-widget clearfix card-box">
							<div className="dash-widget-info">
								<label>Current</label>
								<span> Ram </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);

}

export default AttendanceComponent;

