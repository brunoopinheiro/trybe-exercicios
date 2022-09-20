import { Component } from "react";
import UserName from "./components/UserName";
import UserOtherInfo from "./components/UserOtherInfo";

class Table extends Component {
  render() {
    const { users } = this.props;
    return (
      users.map((user) => (
        <div>
          <UserName name={ user.name } />
          <UserOtherInfo email={ user.email } id={ user.id } />
        </div>
      ))
    );
  }
}

export default Table;
