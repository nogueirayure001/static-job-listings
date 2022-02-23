import React, { Component } from "react";
import Filterbox from "./components/Filterbox/Filterbox.component";
import AllListings from "./components/AllListings/AllListings.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      listings: [],
      activeFilters: [],
    };
  }

  componentDidMount() {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((listings) => this.setState({ listings: listings }));
  }

  updateFilters = (removed = null, added = null) => {
    if (removed) {
      this.setState((prevState) => {
        const newActiveFilters = prevState.activeFilters.filter((filter) => {
          if (filter === removed) {
            return false;
          }
          return true;
        });

        return { activeFilters: newActiveFilters };
      });
    }

    if (added) {
      if (this.state.activeFilters.includes(added)) {
        return;
      }

      this.setState((prevState) => ({
        activeFilters: [...prevState.activeFilters, added],
      }));
    }
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Static Job Listings Site</h1>
        </header>

        <main className='App-main'>
          {this.state.activeFilters.length > 0 ? (
            <Filterbox
              activeFilters={this.state.activeFilters}
              updateFilters={this.updateFilters}
            />
          ) : null}

          <AllListings
            listings={this.state.listings}
            activeFilters={this.state.activeFilters}
            updateFilters={this.updateFilters}
          />
        </main>
      </div>
    );
  }
}

export default App;
