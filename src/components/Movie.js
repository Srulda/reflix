import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Movie extends Component {
  rentMovie = (e) => {
    e.preventDefault()
    this.props.rentMovie(this.props.movie.id);
  }

  render() {
    return (
      <div>
        <Link to = {`/movies/${this.props.movie.id}`}> <div
          id="movie"
          style={{ backgroundImage: `url(${this.props.movie.img})` }}
        >
          <span onClick={this.rentMovie}>
            <i
              className={
                this.props.movie.isRented ? "fas fa-minus" : "fas fa-plus"
              }
            />
          </span>
        </div></Link>
      </div>
    );
  }
}
export default Movie;
