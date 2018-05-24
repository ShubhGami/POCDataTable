import React from "react";
import Component from "react";
import "../public/country.css";

class SelectedCountryList extends React.Component {
  render() {
    const iterator = this.props.countries.map(item => (
      <li>
        <h4>{item}</h4>
      </li>
    ));
    return (
      <div className="list">
        <h3>You have selected following Countries :</h3>
        <ol>{iterator}</ol>
      </div>
    );
  }
}
export default SelectedCountryList;
