import React, { useRef } from "react";
import "../assets/welcome.css";
import send from "../assets/send.png";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import axios from "axios";
import io from "socket.io-client";
class CHAT2 extends React.Component {
  constructor() {
    super();
    this.state = {
      showEmojiPicker: false,
      msg: "",
      id: localStorage
        .getItem("access_token")
        .slice(2, localStorage.getItem("access_token").length - 1),
    };
    this.handleEmoji = this.handleEmoji.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.changeText = this.changeText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  state = {};
  handleEmoji() {
    console.log("tes");
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker,
    });
  }
  addEmoji(e) {
    this.setState({
      msg: (this.state.msg += e.emoji),
    });
  }
  changeText(e) {
    this.setState({
      msg: e.target.value,
    });
  }
  async sendMessage() {
    console.log(this.state.msg);
    console.log(this.props.id);
    await axios.post(`http://127.0.0.1:5000/user/message`, {
      message: this.state.msg,
      recieverId: this.props.id,
      senderId: localStorage
        .getItem("access_token")
        .slice(2, localStorage.getItem("access_token").length - 1),
    });
  }
  render() {
    return (
      <div className="welcome welcome2">
        <div className="profile">
          {<img src={this.props.image} alt="logo" />}
          {<h3>{this.props.name}</h3>}
        </div>
        <div className="chat">
          {this.props.messages.map((message) => (
            <div
              className={this.state.id === message.senderId ? "mess" : "mesr"}
            >
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div className="send">
          <textarea
            onChange={this.changeText}
            value={this.state.msg}
            placeholder="type Your message here....."
          />
        </div>
        <div className="icon">
          {this.state.showEmojiPicker ? (
            <div className="allEmo">
              <EmojiPicker
                height={300}
                width={300}
                theme={"dark"}
                onEmojiClick={this.addEmoji}
              />
            </div>
          ) : null}
          <BsEmojiSmileFill className="emo" onClick={this.handleEmoji} />
        </div>
        <div className="sendI">
          <img src={send} alt="send" onClick={this.sendMessage} />
        </div>
      </div>
    );
  }
}
export default CHAT2;
