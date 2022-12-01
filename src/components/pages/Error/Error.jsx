import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{
        height: "30em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#A52A2A",
      }}
    >
      <h1> Oops! Not Found :(</h1>
      <br />
      <Link style={{ textDecoration: "none", color: "#4169E1" }} to="/catalog">
        GO HOME!
      </Link>
    </div>
  );
}

export default Error;
