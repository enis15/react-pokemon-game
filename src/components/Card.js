import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <img src={this.props.src} alt="description"></img>
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Card;
