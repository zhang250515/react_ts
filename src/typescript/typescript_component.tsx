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
      <p>
        my name is {func.nameCall('jack', 'ma')}
      </p>
      <p>
        my name is {func.nameCall('kent')}
      </p>
      <p>

      </p>
    </div>
  )
};

export {TyComponent}