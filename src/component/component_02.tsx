import React from "react";
import Root01 from "./component_01";
import Component_03 from "./component_03";


const Root02: React.FC = () => {

  return (
    <div>
      <p> Component 02 </p>
      <p> {Root01.defaultProps} </p>
      <Root01 name={'jack'}/>
      <p> component 03</p>
      <p> clock! </p>
      <h2>it is {new Date().toLocaleTimeString()} </h2>
      <Component_03/>
    </div>
  )
};

export default Root02;