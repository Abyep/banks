import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getBanks } from "../Saga";
import BankTable from "../BankTable";
import Sidebar from "../Sidebar";
import Header from "../Header";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banks: [],
    };
  }

  render() {
    console.log(this.state.banks);
    return (
      <div className="homepage">
        <Header />

        <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <div>
            <Sidebar
              handleNavigation={(option) => this.handleNavigation(option)}
            />
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <BankTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banks: state.reducer.banks,
  };
};

export default connect(mapStateToProps)(Homepage);
