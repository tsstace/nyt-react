import React from "react";

// The ...props ---> spread all of the passed props on to this element so
// we don't have to define them all individually
const DeleteBtn = props => (
  <button className="btn btn-primary" {...props}>
    Delete
  </button>
);

export default DeleteBtn;