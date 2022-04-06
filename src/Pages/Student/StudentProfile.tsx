// import {useState} from 'react';
import React, { useEffect, useState } from 'react';
import './../dashboard.css';
import { studentList } from './../DataSource';

function StudentProfileComponent(props: any) {
	 
	const [student, setStudent] = useState<any>({}); 
	 
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
						</div>

					</div>

				</div>
			</div>
		</>
	);

}

export default StudentProfileComponent;

