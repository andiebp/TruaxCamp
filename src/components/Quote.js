import React from "react";

const Quote = (param) => (
	<div className="section no-pad-bot">
		<div className="container">
			<div className="row center">
				<h5 className="col s12 amber-text light">
					{param.children}
					<br />-{param.author}
				</h5>
			</div>
		</div>
	</div>
);

export default Quote;
