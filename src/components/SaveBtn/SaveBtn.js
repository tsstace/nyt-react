
import React from "react";

// The ...props ---> spread all of the passed props onto this element
// so we don't have to define them all individually
const SaveBtn = props => (
	<button className="btn btn-primary" {...props}>
		Save
	</button>
);

export default SaveBtn;