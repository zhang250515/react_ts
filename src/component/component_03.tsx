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
    let url: string = 'http://hd215.api.yesapi.cn/?s=App.Table.FreeQuery&' +
      'model_name=user&logic=and&where=%5B%5B%22id%22%2C+%22%3D%22%2C+%221%22%5D%5D&page=1&' +
      'perpage=10&is_real_total=1&app_key=C0FB352A5A506D61291B06EB94FF54C6&sign=74D8722F15C97A928389E013E96184A8';
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json.data
      })
      .then(data => {
        console.log(data.list[0].user_name)
      });
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