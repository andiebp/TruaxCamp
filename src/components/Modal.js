import React from "react";
import Input from "./Input"
import InputArea from "./InputArea"

const Registration = (params) => (
	<div className="row">
		<form className="col s12">
			<div className="row">
				<Input size="6" label="First Name" id="first_name" type="text" />
				<Input size="6" label="Last Name" id="last_name" type="text" />
			</div>
			<div className="row">
				<Input size="12" label="Date of Birth" id="birthday" type="text" />
			</div>
			<div className="row">
				<Input size="12" label="Home Phone Number" id="telephone" type="tel" />
			</div>
			<div className="row">
				<Input size="12" label="Emergency Phone Number" id="emergency_number" type="tel" />
			</div>
			<div className="row">
				<Input size="12" label="Email" id="email" type="email" />
			</div>
			<div className="row">
				<InputArea size="12" label="Medical Conditions" id="med_conditions" type="text" />
			</div>
			<div className="row">
				<Input size="12" label="Diet Requirements" id="diet" type="text" />
			</div>
			{/* Newsletter Switch
			<div className="switch">
				<label>
				 No
				 <input type="checkbox" />
				 <span className="lever"></span>
				 On
				</label>
			</div>
			*/}
		</form>
	</div>
);

export default Registration;
