import React, { Component } from "react";
import "./sidebar.css";
import BuisnessIcon from "@material-ui/icons/Business";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <div
          onClick={() => this.props.handleNavigation(1)}
          className="sidebar-detail"
        >
          <div
            align="center"
            style={{
              display: "flex",
              width :"100%",
              flex: 1,
              flexDirection: "row",
              // alignItems: "center",
              justifyContent: "flex-start ",
              paddingTop: "10%",
              paddingRight: "5%",
             
            }}
          >
            <div>
              <BuisnessIcon />
            </div>
            <div>Bank</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
