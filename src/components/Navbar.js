import React from "react";

const Navbar = ({ cartItemNum }) => {
  return (
    <div className="navbar">
      <h1>DUCK shop</h1>
      <h3>Cart ({cartItemNum})</h3>
    </div>
  );
};

export default Navbar;
