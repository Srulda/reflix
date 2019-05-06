import React, { Component } from "react";
import Movie from "./Movie";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          id="searchInput"
          value={this.state.searchInput}
          onChange={this.handleInput}
        />
        <div>${this.props.budget}</div>

        <div className="rented-container">
          {this.props.catalog.map(m =>
            m.isRented ? (
                <div>
                <Movie movie={m} key={m.id} rentMovie={this.props.rentMovie} />
                </div>
            ) : null
          )}
        </div>
        <hr />
        <div className="movies-container">
          {this.props.catalog.map(m => (
            <Movie movie={m} key={m.id} rentMovie={this.props.rentMovie} />
          ))}
        </div>
      </div>
    );
  }
}

export default Catalog;
