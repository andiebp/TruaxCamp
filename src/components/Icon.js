import React from "react";

const icon = (props) => (
	<div className="col s12 m4">
		<div className="icon-block">
			<h2 className="center amber-text">
				<i className="material-icons">{props.icon}</i>
			</h2>
			<h5 className="center amber-text">{props.title}</h5>
			<p className="grey-text light">{props.desc}</p>
		</div>
	</div>
);

export default icon;
