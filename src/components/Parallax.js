import React from "react";

const Parallax = (props) => (
	<div className="parallax-container valign-wrapper">
		<div className="parallax">
			<img src={"../images/background" + props.bg + ".jpg"} alt={"background " + props.bg} />
		</div>
		{props.children}
	</div>
);

export default Parallax;
