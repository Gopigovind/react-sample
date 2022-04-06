// import {useState} from 'react';
import React, { useEffect, useState } from 'react';
import AttendanceComponent from './Attendance';
import './dashboard.css';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import { studentList, dailyNotices } from './DataSource';

function DashboardComponent(props: any) {
	const [value, setValue] = React.useState<Date>(new Date());
	const [student, setStudent] = useState<any>({});
	const currDay = new Date().toLocaleString('en-us', { weekday: 'long' });
	const currMonth = new Date().getDay() + ' ' + new Date().toLocaleString('en-us', { month: 'long' });
	const currDate = currDay + ', ' + new Date().getDay() + ' ' + new Date().toLocaleString('en-us', { month: 'long' }) + ' ' + new Date().getFullYear();
	useEffect(() => {
		const item = studentList?.filter((stu: any) => stu.id === props.id)[0];
		setStudent(item);
	}, []);

	return (
		<>
			<div className="page-wrapper" id="dashboard_wrapper">
				<div className="content container-fluid">
					<div className="row">
						<div className="col-md-8 col-sm-8 col-lg-8">
							<div className='page-title'>
								<h4>Dashboard</h4>
								<div>Academic Year dropdown</div>
							</div>
							<div className='row'>
								<div className="col-md-3 col-sm-3 col-lg-3 profile-wrapper">
									<img className='profile-image' src="https://lh3.googleusercontent.com/ogw/ADea4I48ZuXL90BcEdzez6qKQRTGvuBBON7MGZLx9N87=s32-c-mo" alt='G' />
									<span className='name'>{student?.firstname} {student?.lastname}</span>
								</div>
								<div className="col-md-9 col-sm-9 col-lg-9">
									<div className='row'>
										<div className="col-md-4 col-sm-4 col-lg-4">
											<div className="dash-widget clearfix card-box">
												<div className="dash-widget-info">
													<label>Student Name</label>
													<span>{student?.firstname} {student?.lastname}</span>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-4 col-lg-4">
											<div className="dash-widget clearfix card-box">
												<div className="dash-widget-info">
													<label>Class & Section</label>
													<span> {student?.class} {student?.section} </span>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-4 col-lg-4">
											<div className="dash-widget clearfix card-box">
												<div className="dash-widget-info">
													<label>Class Roll No.</label>
													<span> {student?.id} </span>
												</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className="col-md-12 col-sm-12 col-lg-12">
											<div className="dash-widget clearfix card-box">
												<div className="dash-widget-info">
													<div className='row'>
														<div className='col-md-4 col-sm-4 col-lg-4'>
															<label>Date Of Birth</label>
															<span> {student?.dateOfBirth} </span>
														</div>
														<div className='col-md-4 col-sm-4 col-lg-4'>
															<label>Admission No.</label>
															<span> {student?.admissionNo} </span>
														</div>
														<div className='col-md-4 col-sm-4 col-lg-4'>
															<label>Blood Group</label>
															<span> {student?.bloodGroup} </span>
														</div>
													</div>
													<div className='row'>
														<div className='col-md-4 col-sm-4 col-lg-4'>
															<label>Parent Name</label>
															<span> {student?.parentInfo?.fathername} </span>
														</div>
														<div className='col-md-4 col-sm-4 col-lg-4'>
															<label>Parent Mobile No.</label>
															<span> {student?.parentInfo?.fatherMobileNo} </span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className="col-md-8 col-sm-8 col-lg-8">
											<div className="dash-widget clearfix card-box">
												<div className="dash-widget-info">
													<label>Address</label>
													<span>{student?.presentAddress?.doorNo} {student?.presentAddress?.street}, {student?.presentAddress?.city} </span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='page-title'>
								<h4>Attendance</h4>
								<div>View All</div>
							</div>
							<div className='row'>
								<AttendanceComponent />
							</div>
							<div className='page-title'>
								<h4>Daily Notices</h4>
							</div>
							<div className='row'>

								<div className="col-md-12 col-sm-12 col-lg-12">
									<div className="dash-widget clearfix card-box">
										<div className="dash-widget-info">
											{dailyNotices?.map((item: any, indexVal: number) => (
											<div className='row border-bottom-line' key={indexVal}>
												<div className='col-md-1 col-sm-1 col-lg-1'>
													<div className='circle-icon'></div>
												</div>
												<div className='col-md-3 col-sm-3 col-lg-3 border-left-line'>
													<h4 className='h4-class'>{item.sub}</h4>
													<p className='class-date'>{item.date}</p>
												</div>
												<div className='col-md-8 col-sm-8 col-lg-8'>
													<h5 className='class-reason'>{item.reason}</h5>
												</div>
											</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-4 col-lg-4 calendar-col-container">
							<div className='calendar-wrapper'>
								<div className='page-title'>
									<h4>Dashboard</h4>
									<div>Academic Year dropdown</div>
								</div>
								<div className='calendar-row-container'>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<StaticDatePicker
											openTo="day"
											displayStaticWrapperAs="desktop"
											value={value}
											shouldDisableDate={isWeekend}
											onChange={(newValue: Date) => {
												setValue(newValue);
											}}
											renderInput={(params) => <TextField {...params} />}
										/>
									</LocalizationProvider>
								</div>
								<div className='time-table'>
									<div className='page-title'>
										<h4>Time Table</h4>
										<span className='small'>{currDate}</span>
									</div>
									{
										student?.timeTable && student?.timeTable[currDay.toLowerCase()]?.map((data: any, index: number) => (
											<div className="dash-widget clearfix card-box" key={index} style={{ background: data.bgColor }}>
												<div className="dash-widget-info">
													<div className='row'>
														<div className='col-md-2 col-sm-2 col-lg-2'>
															<div className='sub-profile'></div>
														</div>
														<div className='col-md-10 col-sm-10 col-lg-10'>
															<div className='sub-title m-t-10 m-b-0'>{data.subject}</div>
															<div className='time-duration small '>{currMonth + ', ' + data.time}</div>
														</div>
													</div>
												</div>
											</div>
										))
									}
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</>
	);

}

export default DashboardComponent;

