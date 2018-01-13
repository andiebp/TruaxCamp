import React from "react";

const Navbar = () => (
	<nav className="white">
		<div className="nav-wrapper container">
			<ul className="right hide-on-med-and-down">
				<li>Menu</li>
			</ul>
			<ul id="nav-mobile" className="side-nav">
				<li>
					<button>Navbar Link</button>
				</li>
			</ul>
			<button data-activates="nav-mobile" className="button-collapse">
				<i className="material-icons">menu</i>
			</button>
		</div>
	</nav>
);

export default Navbar;
