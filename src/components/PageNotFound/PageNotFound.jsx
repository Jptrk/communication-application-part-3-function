import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "80px",
          textAlign: "center",
        }}
      >
        <h1>404 Page not found.</h1>
        <br />
        <Link to="/" style={{ color: "blue" }}>
          Go back
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
