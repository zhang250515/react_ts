import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './antd/antD.css'
import * as serviceWorker from './serviceWorker';
import {TyComponent} from "./typescript/typescript_component";

function tick() {
  ReactDOM.render(<TyComponent />, document.getElementById('root'));
}

tick();

//setInterval(tick, 1000);
//ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
