import React from "react";
import Component from "react";
import Pagination from "./Pagination.js";

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
    this.getThreatLevel = this.getThreatLevel.bind(this);
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
      });
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  // handelCheckboxState() {
  //   // this.setState({
  //   //   checked: !this.state.checked
  //   // });

  //   console.log("----stateChange");
  // }
  // myfunction(x){
  //   console.log(x.rowIndex);
  // }
  getThreatLevel(e) {
    if (e.target.value === 3 || e.target.value === 4) alert("Hi Alert");
    console.log("Data:", e.target.id);
  }
  render() {
    const data = this.state.countryData;
    // const iterator1 = data.map(list => (
    //   <tbody>
    //     <tr>
    //       <td>{list.id}</td>
    //       <td>{list.name}</td>
    //       <td>{list.threatLevel}</td>
    //     </tr>
    //   </tbody>
    // ));

    const iterator = this.state.pageOfItems.map(item => (
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.threatLevel}</td>
          <td>
            <input
              id={item.id}
              disabled={this.state.isDisabled}
              type="checkbox"
              value={item.threatLevel}
              onChange={this.getThreatLevel}
            />
          </td>
        </tr>
      </tbody>
    ));

    // console.log("data: " + JSON.stringify(this.state.countryData));
    return (
      <div>
        <div style={{ color: "red" }}>
          <section>
            <b>CountryData Showing here</b>
          </section>
        </div>
        <h5> List of the Countries with Threat Level:</h5>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>
                <b>ID</b>
              </th>
              <th>
                <b>Country Name</b>
              </th>
              <th>
                <b>Threat Level</b>
              </th>
              <th>
                <b>Select</b>
              </th>
            </tr>
          </thead>
          {iterator}
        </table>
        <Pagination items={data} onChangePage={this.onChangePage} />
        <div>
          <input
            type="button"
            className="btn btn-success"
            value="ADD Countries"
            style={{ float: "right", paddingLeft: "30px" }}
          />
        </div>
      </div>
    );
  }
}
export default CountryData;
