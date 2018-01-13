import React from "react";

const Panel = (props) => (
	<div className= "container">
		<div className="section">
			<div className="row">
				{props.children}
			</div>
		</div>
	</div>
);

export default Panel;
