import React from "react";
import "../assets/welcome.css";
import send from "../assets/send.png";
// import Picker from "emoji-picker-react";
// import { IoMdSend } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { Theme } from "emoji-picker-react";
import { EmojiStyle } from "emoji-picker-react";

class CHAT2 extends React.Component {
  constructor() {
    super();
    this.state = {
      showEmojiPicker: false,
      msg: "",
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
  sendMessage() {
    console.log(this.state.msg);
  }

  render() {
    return (
      <div className="welcome welcome2">
        <div className="profile">
          {<img src={this.props.image} alt="logo" />}
          {<h3>{this.props.name}</h3>}
        </div>
        <div className="chat"></div>
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
