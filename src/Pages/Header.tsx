import * as React from 'react';
import './header.css'


function HeaderComponent() {
	return (
		<div>
			<div className="header-main">
				<div className="header-left">
					<a className="logo" href="javascript:void(0);">
						<img src="assets/img/logo.png" width="40" height="40" alt="" />
					</a>
				</div>
				<nav>
					<a id="toggle_btn" href="javascript:void(0);">
						<i className="la la-bars" />
					</a>
					<div className="page-title-box pull-left">
						<h3>Example School</h3>
					</div>
				</nav>
			</div>
		</div >
	)
}

export default HeaderComponent;