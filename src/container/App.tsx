import React,{Component} from "react";
import {Link} from "react-router-dom";

class App extends Component<any, any> {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'> home page </Link>
          </li>
          <li>
            <Link to='/city'> city </Link>
          </li>
          <li>
            <Link to='/detail'> detail </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;