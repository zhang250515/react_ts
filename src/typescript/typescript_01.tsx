import React from "react";
import {Person} from "./Person";
import {Student} from "./Student";
import {Color} from "./ColorEnum";
import {ISearch} from "./ISearch";

function hello(name: string): void {
  console.log(name)
}

function greeter(person: Person) {
  return `Hello ${person.name} and you are ${person.age} years old`
}

function countByVar() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 100)
  }
}

function countByLet() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 100)
  }
}

let mySearch:ISearch = function searchSUB(src:string, sub:string):boolean {
  console.log('1111');
    return src.search(sub) > -1
};

let ok = function () {
  return 'ok'
};

const Ts_01: React.FC = () => {

  //Basic Data Type
  let kent: Person = {name: 'kent', age: 18};
  let jack = new Student('Jack', 'Ma');
  let isDone: boolean = true;
  let list: string[] = ['hello', 'array'];
  let red: Color = Color.RED;  // Enum
  let solr: [string, number] = ['abc', 10];
  let a = [1,2,3];
  let b = [4,5,6];
  let c = [1,...a, 2, ...b];
  let ma = {name: '123', age: 15, hello: 222};

  let b1 = mySearch('abc', 'a');
  return (
    <div>
      {
        greeter(kent)
      }
      <p> {greeter(ma)} </p>
      <p> {jack.fullName}  </p>
      <ul>
        {
          list.map((item: string, index: number) => {
            return <li key={index}> {item} </li>
          })
        }
      </ul>
      <p> the red color is {red} </p>
      <p> hello {hello('everyOne')} </p>
      <p> tuple is {solr[0]} , {solr[1]} </p>
      <p> boolean is {isDone} </p>
      <button onClick={() => countByVar()}> count by var!</button>
      <br/>
      <button onClick={() => countByLet()}> count by let!</button>
      <br/>
      <p> result is : {} </p>
      <p> result is : {ok()} </p>
    </div>

  )
};

export default Ts_01;