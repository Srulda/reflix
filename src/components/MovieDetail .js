import React, { Component } from "react";

class MovieDetail extends Component {

render() {
    let movie = this.props.catalog[this.props.match.params.id]
    return (
      <div>
        <div id="chosenMovie" style={{ backgroundImage: `url(${movie.img})`}}>
        {movie.title}
        </div>
        <div>year: {movie.year}</div>
        <div>description: {movie.descrShort}</div>
      </div>
    );
  }
}

export default MovieDetail;
