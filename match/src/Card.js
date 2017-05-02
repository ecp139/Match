import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <p>{this.props.id}</p>
        <p>{this.props.matchId}</p>
      </div>
    );
  }
}
export default Card;
