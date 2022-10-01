import React from "react";
import axios from "axios";
import Logo from "../assets/logo.svg";
import "../assets/welcome.css";
import CHAT2 from "./chat2";
import CHAT from "./welcome";
import Loader from "../assets/loader.gif";
class contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      use: null,
      users: [],
      image: "",
      loading: false,
      isActive: -1,
      msg: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:5000/user").then((res) => {
      this.setState({
        users: res.data.data,
        loading: true,
      });
    });
  }
  handleClick(e) {
    let data = !e.target.className ? e.target.parentNode : e.target;
    this.setState({
      use: data.lastChild.innerText,
      image: data.firstChild.src,
    });
    let x = document.getElementsByClassName("user");
    for (let i = 0; i < x.length; i++) {
      x[i].className = "user";
    }
    //x.className = "user";
    let d = e.target;
    if (d.className !== "user") d = e.target.parentNode;
    d.className = "user active";
  }
  render() {
    return (
      <>
        {!this.state.loading ? (
          <div>
            <img src={Loader} alt="loader" className="loader" />
          </div>
        ) : (
          <div className="all">
            <div className="container">
              <div className="allContacts">
                <div className="brand">
                  <img src={Logo} alt="logo" />
                  <h3>Telegram</h3>
                </div>
                <div className="contacts">
                  {this.state.users.map((user) => (
                    <div className="user" onClick={this.handleClick}>
                      <img src={user.image} alt="phot" />
                      <h3>{user.username}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {this.state.use === null ? (
                <CHAT />
              ) : (
                <CHAT2 name={this.state.use} image={this.state.image} />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default contacts;
