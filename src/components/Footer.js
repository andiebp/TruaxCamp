import React from "react";

const Footer = (params) => (
	<footer className="page-footer grey" >
		<div className="container">
			<h5 className="amber-text">Founder's Bio</h5>
			<p className="white-text text-lighten-6">
				{params.children}
			</p>
		</div>
		<div className="footer-copyright">
			<div className="container">
				<a className="amber-text text-lighten-3 left" href={"mailto:" + params.email}>{params.email}</a>
				<a className="amber-text text-lighten-3 right" href={"http://www." + params.site}>{params.site}</a>
			</div>
		</div>
	</footer>
);

export default Footer;
