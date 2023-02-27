import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto",
        width: "100%",
        height: "100%",
        marginTop: "50px",
      }}
    >
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/list"> Products list</NavLink>
      <NavLink to="/add"> Add product </NavLink>
    </div>
  );
}

export default Navbar;
