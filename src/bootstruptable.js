import React from "react";
import Component from "react";
import Pagination from "./Pagination.js";
import { BootstrapTable } from "react-bootstrap-table";

const selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

function onRowSelect(row, isSelected, e) {
  let rowStr = "";

  for (const prop in row) {
    rowStr += prop + ': "' + row[prop] + '"';
  }

  console.log(e);

  alert(`is selected: ${isSelected}, ${rowStr}`);
}

function onSelectAll(isSelected, rows) {
  alert(`is select all: ${isSelected}`);

  if (isSelected) {
    alert("Current display and selected data: ");
  } else {
    alert("unselect rows: ");
  }

  for (let i = 0; i < rows.length; i++) {
    alert(rows[i].id);
  }
}

class CountryData extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      countryData: [],
      pageOfItems: [],
      id: "",
      checked: false
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.format = this.format.bind(this);
    this.onRowSelect = this.onRowSelect.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
    // this.handelCheckboxState = this.handelCheckboxState.bind(this);
  }
  componentWillMount() {
    this.getCountryList();
  }

  componentDidMount() {
    //this.getCountryList();
  }

  getCountryList() {
    fetch("https://web-travel-test.cc.uic.edu/countries")
      .then(resultObject => resultObject.json())
      .then(resultObject => {
        this.setState({
          countryData: resultObject
        });
        console.log(JSON.stringify(this.state.countryData));
      });
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  format(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }

  onRowSelect(row, isSelected, e) {
    let rowStr = "";
    for (const prop in row) {
      rowStr += prop + ': "' + row[prop] + '"';
    }
    console.log(e);
    alert(`is selected: ${isSelected}, ${rowStr}`);
  }

  onSelectAll(isSelected, rows) {
    alert(`is select all: ${isSelected}`);
    if (isSelected) {
      alert("Current display and selected data: ");
    } else {
      alert("unselect rows: ");
    }
    for (let i = 0; i < rows.length; i++) {
      alert(rows[i].id);
    }
  }

  render() {
    const data = this.state.countryData;

    return (
      <div>
        <div style={{ color: "red" }}>
          <section>
            <b>CountryData Showing here</b>
          </section>
        </div>
        <h5> List of the Countries with Threat Level:</h5>

        <BootstrapTable
          data={data}
          selectRow={selectRowProp}
          striped
          hover
          condensed
          pagination
        >
          <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>
            Country Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="threatLevel" dataAlign="center">
            Level
          </TableHeaderColumn>
          <TableHeaderColumn dataField="threatText" dataAlign="right" dataSort>
            ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default CountryData;
