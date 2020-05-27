import React, { Component } from "react";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import StarIcon from "@material-ui/icons/GradeOutlined";

class TableResultView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Bank</TableCell>
              <TableCell align="center">IFSC</TableCell>
              <TableCell align="center">Branch </TableCell>
              <TableCell align="center">Bank ID</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.filteredBanks
              .slice(this.props.startPoint, this.props.pagination)
              .map((bank, index) => (
                <TableRow>
                  <TableCell align="center">
                    <StarIcon />
                  </TableCell>

                  <TableCell align="center">{bank.bank_name}</TableCell>
                  <TableCell align="center">{bank.ifsc}</TableCell>
                  <TableCell align="center">{bank.branch}</TableCell>
                  <TableCell align="center">{bank.bank_id}</TableCell>
                  <TableCell align="center">{bank.address}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableResultView;
