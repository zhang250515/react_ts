import React from "react";
import {Route,Switch} from "react-router";
import Home from "../container/home";
import City from "../container/city";
import Detail from "../container/detail";

const SubRouter : React.FC = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/city' component={City}/>
      <Route path={'/detail'} component={Detail}/>
    </Switch>
  )
};

export default SubRouter;