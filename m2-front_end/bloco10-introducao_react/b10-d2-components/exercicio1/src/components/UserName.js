import { Component } from "react";
import './UserName.css';
import PropTypes from 'prop-types';

class UserName extends Component {
  render() {
    return <span className="name">{ this.props.name }</span>
  }
}

UserName.propTypes = {
  name: PropTypes.string,
}

UserName.defaultProps = {
  name: 'John Doe',
}

export default UserName;
