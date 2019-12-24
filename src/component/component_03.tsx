import React, {Component} from "react";

interface MyState {
  time: string
}

class Component_03 extends Component<any, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  handleChange() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    return (
      <div>
        now is :
        <p>{this.state.time}</p>

        <button onClick={() => this.handleChange()}> change time</button>
      </div>
    )
  }

}

export default Component_03;