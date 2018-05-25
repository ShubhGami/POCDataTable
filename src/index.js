import React from "react";
import Pagination from "./Pagination.js";
import render from "react-dom";
import ReactDOM from "react-dom";
import CountryData from "./CountryData.js";
import "../public/country.css";

class App extends React.Component {
  constructor() {
    super(); // an example array of 150 items to be paged
    var exampleItems = [...Array(150).keys()].map(i => ({
      id: i + 1,
      name: "Item " + (i + 1)
    }));
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    }; // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return <CountryData />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
