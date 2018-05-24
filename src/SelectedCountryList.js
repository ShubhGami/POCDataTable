import React from "react";
import Component from "react";

class SelectedCountryList extends React.Component {
  render() {
    const iterator = this.props.countries.map(item => <li>{item}</li>);
    return (
      <div>
        <h2>You have selected below Countries :</h2>
        <ol>{iterator}</ol>
      </div>
    );
  }
}
export default SelectedCountryList;
