import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './sidebar.css'

function SideBarComponent() {

	const menuItems: any = [
		{ id: 1, text: 'Dashboard', icon: 'la la-dashboard', url: 'dashboard', isActive: true },
		{
			id: 2, text: 'Student', icon: 'la la-user-circle', children: [
				{ id: 1, text: 'All Students', url: 'all-students' },
				{ id: 2, text: 'Student Profile', url: 'student-profile' },
				// { id: 2, text: 'Holidays', url: 'employees/holidays' },
				// { id: 3, text: 'Leave Requests', url: 'employees/leaves' },   
				// { id: 4, text: 'Attendance', url: 'employees/attendance' }
			]
		},
		{ id: 3, text: 'Acedemics', icon: 'la la-graduation-cap', url: 'acedemics' },
		{ id: 4, text: 'Attendance', icon: 'la la-user-check', url: 'attendance' },
		{ id: 5, text: 'Live Classroom', icon: 'la la-tasks', url: 'liveClassroom' },
		{ id: 6, text: 'Assignments', icon: 'la la-book', url: 'assignments' },
		{ id: 7, text: 'Fees', icon: 'la la-user-secret', url: 'fees' },
		{
			id: 8, text: 'Daily Notices', icon: 'la la-files-o', url: 'dailyNotices'
		},
		{
			id: 9, text: 'Calendar', icon: 'la la-money', url: 'Calendar'
		},
		{
			id: 10, text: 'Feedback', icon: 'la la-pie-chart', url: 'feedback'
		}
	];

	function menuClickHandler(e: any) {
		const targetEle: HTMLElement = e.currentTarget;
		const parentEle: HTMLElement = targetEle?.parentElement as HTMLElement;
      if (parentEle.classList.contains('submenu')) {
        if (targetEle.classList.contains('subdrop')) {
			targetEle.classList.remove('subdrop');
			parentEle.classList.remove('show-child-menu');
        } else {
          targetEle.classList.add('subdrop');
		  parentEle?.classList.add('show-child-menu');
        }
      }
	}

	return (
		<>
			<div className="sidebar" id="sidebar">
				<Scrollbars >
					<div className="sidebar-inner slimscroll-wrap">
						<div id="sidebar-menu" className="sidebar-menu py-2">
							<div className='toggle_wrapper'>
								<a id="toggle_btn" href="javascript:void(0);">
									<i className="la la-bars" />
								</a>
							</div>
							<ul className="list-unstyled">
								{menuItems?.map((menu: any, index: number) => (
									<li key={index} className={"list-ele " + (menu?.children?.length > 0 ? 'submenu': 'menu')}>
										<a className="px-3 py-2" href={menu.url} onClick={menuClickHandler}>
											<i className={menu.icon} />
											<span>{menu.text}</span>
											{
												(menu?.children?.length > 0) ?
													<span className="menu-arrow" /> : null
											}
										</a>
										{
											(menu?.children?.length > 0) ?
												<ul className="list-unstyled">
													{menu?.children?.map((child: any, index1: number) => (
														<li key={index1} className="list-ele">
															<a className="px-3 py-2" href={child.url}>
																<i className={child.icon} />
																<span>{child.text}</span>
																{
																	(child?.children?.length > 0) ?
																		<span className="menu-arrow" /> : null
																}
															</a>
														</li>
													))}
												</ul>
												: null
										}
									</li>
								))}
							</ul>
						</div >
						<div className="cover-bar" />
					</div >
				</Scrollbars>
			</div >
		</>
	)
}

export default SideBarComponent;

