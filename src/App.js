import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  // declaring the state inside constructor
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  robotsSearchChange = (event) => {
    // update state of update searchField
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robot Search</h1>
        <SearchBox searchChange={this.robotsSearchChange}></SearchBox>
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
