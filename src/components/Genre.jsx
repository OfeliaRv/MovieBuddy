import React, { Component } from 'react';

class Genre extends Component {
    render() {
        return (
            <li className="select-nav-list-item"><a id={this.props.data.name}>{this.props.data.name}</a></li>
        );
    }
}

export default Genre;