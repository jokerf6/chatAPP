import React from "react";
import "../assets/welcome.css";
class CHAT2 extends React.Component {
  render() {
    return (
      <div className="welcome welcome2">
        <div className="profile">
          {<img src={this.props.image} alt="logo" />}
          {<h3>{this.props.name}</h3>}
        </div>
        <div className="chat"></div>
        <div className="send">
          <textarea placeholder="type Your message here....." />
        </div>
        <div className="icon">
          <button type="submit">Send </button>
        </div>
      </div>
    );
  }
}
export default CHAT2;
