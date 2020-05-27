import React, { Component } from "react";
import { connect } from "react-redux";

import { Paper, TextField } from "@material-ui/core";
import { getBanks } from "../Saga";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TableResultView from "../TableResultView";

class BankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banks: [],
      filteredBanks: [],
      pagination: 10,
      cities: ["Mumbai", "Delhi", "Karnataka", "West Bengal", "Assam"],
      categories: ["IFSC", "Branch"],
      category: "",
      ifsc: "ABHY0065001",
      searchInput: "",
      startPoint: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(getBanks());
  }

  componentWillReceiveProps(props) {
    if (props.banks !== null) {
      this.setState({
        banks: props.banks,
        filteredBanks: props.banks,
      });
    }
  }

  handleRowsPerPage = (event) => {
    this.setState({
      pagination: event.target.value,
    });
  };

  handleCity = (event) => {
    console.log(event.target.value);
    let filteredBanks = this.state.filteredBanks.slice();
    filteredBanks = this.state.banks.filter((bank) => {
      if (bank.city.toLowerCase() == event.target.value.toLowerCase()) {
        return true;
      }
    });
    this.setState({
      filteredBanks: filteredBanks,
    });
  };

  handleCategory = (event) => {
    this.setState({
      category: event.target.value.toLowerCase(),
    });
  };
  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  handleBack = () => {
    this.setState({
      startPoint:
        this.state.startPoint - this.state.pagination < 0
          ? 0
          : this.state.startPoint - this.state.pagination,
      pagination: this.state.startPoint,
    });
  };
  handleForward = () => {
    this.setState({
      startPoint:
        this.state.startPoint === 0
          ? this.state.pagination
          : this.state.startPoint + this.state.pagination,
      pagination: this.state.pagination + this.state.pagination,
    });
  };

  render() {
    let filteredBanks = this.state.filteredBanks.slice();
    if (this.state.searchInput !== "") {
      filteredBanks = this.state.filteredBanks.filter((bank) => {
        return (
          bank[this.state.category]
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1
        );
      });
    }
    return (
      <>
        <Paper
          style={{
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "5%",
            width: "100%",
          }}
        >
          {this.topView()}
          <TableResultView
            filteredBanks={filteredBanks}
            startPoint={this.state.startPoint}
            pagination={this.state.pagination}
          />

          {this.bottomView()}
        </Paper>
      </>
    );
  }

  topView = () => {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          padding: "2%",
        }}
      >
        <div style={{ display: "flex", flex: 0.4, fontSize: "1.5em" }}>
          Banks
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.6,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {" "}
          <FormControl>
            <InputLabel>Select City</InputLabel>
            <Select
              style={{ width: "150px" }}
              native
              onChange={this.handleCity}
              label="Select City"
            >
              <option aria-label="None" value="" />
              {this.state.cities.map((city, index) => (
                <option value={city}>{city}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Select Category</InputLabel>
            <Select
              style={{ width: "150px" }}
              native
              onChange={this.handleCategory}
              label="Select City"
            >
              <option aria-label="None" value="" />
              {this.state.categories.map((category, index) => (
                <option value={category}>{category}</option>
              ))}
            </Select>
          </FormControl>
          <TextField
            style={{ marginTop: "5px" }}
            value={this.state.searchInput}
            placeholder="Search"
            id="standard-start-adornment"
            onChange={this.handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    );
  };

  bottomView = () => {
    return (
      <div align="right">
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              margin: "1%",
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-end",
              minWidth: "150px",
            }}
          >
            <div>Rows per page</div>
            <NativeSelect
              value={this.state.pagination}
              style={{ marginLeft: "1%" }}
              onChange={this.handleRowsPerPage}
              inputProps={{
                name: "age",
                id: "age-native-helper",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>10</option>
              <option value={20}>20</option>
            </NativeSelect>
            {/* <FormHelperText>Some important helper text</FormHelperText> */}
          </div>
          <div
            style={{
              margin: "1%",
              display: "flex",
              // flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              minWidth: "150px",
            }}
          >
            {" "}
            <div>
              {" "}
              {this.state.startPoint + 1}-{this.state.pagination} of{" "}
              {this.state.banks.length}{" "}
            </div>{" "}
            <div
              style={{ cursor: "pointer", paddingLeft: "1%" }}
              onClick={this.handleBack}
            >{`<`}</div>
            <div
              style={{ cursor: "pointer", paddingLeft: "1%" }}
              onClick={this.handleForward}
            >{`>`}</div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    banks: state.reducer.banks,
  };
};

export default connect(mapStateToProps)(BankTable);
