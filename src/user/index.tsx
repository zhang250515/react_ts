import React, {Component} from "react";

interface UserEntity {
  name: string | null,
  age: number | null
}

class User extends Component<UserEntity> {
  render() {
    return (
      <div>
        <p> this is user</p>
        <h3> user name : </h3>
        <p> {this.props.name} </p>
        <p> {this.props.age}</p>
      </div>
    )
  }
}

export default User;