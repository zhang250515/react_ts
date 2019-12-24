import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './antd/antD.css'
import * as serviceWorker from './serviceWorker';
import AntDemo01 from "./antd/demo01";

function tick() {
  ReactDOM.render(<AntDemo01 />, document.getElementById('root'));
}

tick();

//setInterval(tick, 1000);
//ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
