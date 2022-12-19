import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import "./App.css";

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
    // destructuring
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading robots....</h1>
    ) : (
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

export default App;
