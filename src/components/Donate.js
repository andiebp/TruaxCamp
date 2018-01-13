import React from "react";
import Paypal from './Paypal.js';

const donate = (params) => (
	<div className="container">
		<div className="section">
			<div className="row">
				<div className="col s12 center">
					<h3>
						<i className="mdi-content-send grey-text" />
					</h3>
					<Paypal />
					<p className="grey-text left-align light">
						{params.children}
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default donate;
