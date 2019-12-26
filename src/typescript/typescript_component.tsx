import React from "react";
import {Greeter} from "./typescript_class"
import FuncStudy from "./typescript_function";

const TyComponent: React.FC = () => {

  let greet = new Greeter('hello typescript');
  let func = new FuncStudy();
  return (
    <div>
      <p> {greet.greet()} </p>
      <p> {func.add(1,2)} </p>
      <p> {func.myAdd(1,2)} </p>
    </div>
  )
};

export {TyComponent}