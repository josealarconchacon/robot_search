import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  // declaring the state inside constructor
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
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
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading robots....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Search</h1>
          <SearchBox searchChange={this.robotsSearchChange}></SearchBox>
          {/* Scroll - Wrap Component */}
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
