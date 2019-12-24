import React from "react";

interface NameProps {
  name?: string | null
}

const Root01: React.FC<NameProps> = (nameProps: NameProps) => {


  let color = {
    color: 'red',
    fontSize: '40px'
  };

  let a = 1;
  function handler() {
    alert('hello')
  }


  return (
    <div className={'container'}>
      hello
      <p style={color}> world {a} </p>
      <button onClick={handler}>  click !</button>
      <p> user name is : </p>
      <p> {nameProps.name} </p>
      <p> {nameProps.name} </p>
    </div>
  )
};

export default Root01;