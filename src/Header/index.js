import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <div
            style={{
              background: "#56b596",
              minWidth: "200px",
              maxWidth:"200px",
              width: "100%",
              display: "flex",
              flex: 0.3,
              height: "10vh",
            }}
          ></div>
          <div
            style={{
              background: "#202124",
              width: "100%",
              display: "flex",
              flex: 1,
              height: "10vh",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
export default Header;
