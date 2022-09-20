import { Component } from "react";
import './UserName.css';

class UserName extends Component {
  render() {
    return <span className="name">{ this.props.name }</span>
  }
}

export default UserName;
