import React from "react";
import "../assets/welcome.css";
class CHAT2 extends React.Component {
  render() {
    return (
      <div className="welcome">
        {<img src={this.props.image} alt="logo" />}
        {<h3>{this.props.name}</h3>}
      </div>
    );
  }
}
export default CHAT2;
