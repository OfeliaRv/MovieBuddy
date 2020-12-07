import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div className="movie-card">
                <div className="card-img">
                    <img src={"https://image.tmdb.org/t/p/w1280/" + this.props.data.poster_path} alt={this.props.data.original_title} />
                </div>
                <div className="card-data">
                    <h4 className="movie-title">{this.props.data.original_title}</h4>
                </div>
            </div>
        );
    }
}

export default Movie;