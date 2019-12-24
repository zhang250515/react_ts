import React from "react";
import {Person} from "./Person"
import {Student} from "./Student";
import {Color} from "./ColorEnum"

function hello(name: string) :void {
    console.log(name)
}

function greeter(person: Person) {
    return `Hello ${person.name} and you are ${person.age} years old`
}

const Ts_01: React.FC = () => {

    let kent: Person = {name: 'kent', age: 18};
    let jack = new Student('Jack', 'Ma');
    let isDone: boolean = true;
    let list: string[] = ['hello', 'array'];
    let red:Color = Color.RED;
    return (
        <div>
            {
                greeter(kent)
            }
            <p> {jack.fullName}  </p>
            <ul>
                {
                    list.map((item:string, index:number) => {
                        return <li key={index}> {item} </li>
                    })
                }
            </ul>
            <p> the red color is {red} </p>
            <p> hello {hello('everyOne')} </p>
        </div>

    )
};

export default Ts_01;