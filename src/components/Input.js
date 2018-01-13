import React from "react";

const Input = (params) => (
	<div className={"input-field col s" + params.size}>
		<input id={params.id} type={params.type} className={params.id === "birthday" ? "datepicker" : "validate"} />
		<label htmlFor={params.id}>{"Camper's " + params.label}</label>
	</div>
);

export default Input;
