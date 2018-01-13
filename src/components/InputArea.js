import React from "react";

const InputArea = (params) => (
	<div className={"input-field col s" + params.size}>
		<textarea id={params.id} type={params.type} className="materialize-textarea" data-length="200" />
		<label htmlFor={params.id}>{"Camper's " + params.label}</label>
	</div>
);

export default InputArea;
