import React from "react";
import {Route, BrowserRouter} from "react-router-dom"
import SubRouter from "./SubRouter";
import App from "../container/App";

const AppRouter: React.FC = () => {
  return(
    <BrowserRouter>
      <App>
        <Route path='/' component={SubRouter}/>
      </App>
    </BrowserRouter>
  )
};

export default AppRouter;