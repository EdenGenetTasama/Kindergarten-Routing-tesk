import React, { useState } from "react";
import Child from "../childComponent/chlid";
import Teacher from "../teacherComponent/teacher";
import Parents from "../ParentsComponenet/parent";
// import SwitchCaseFunction from '../Router';

export default function HomePage() {
  const [number, serNumber] = useState(0);

  const SwitchCaseFunction = ()=> {
    switch (number) {
      case 1:
        return <Child/>;
      case 2:
        return <Teacher/>;
      case 3:
        return <Parents/>;
      default:
        return<div></div>;
    }
  }
  return (
    <div>
      <h1>Home Page:</h1>
      <button type="button" onClick={() => serNumber(1)}>
        1.Child
      </button>
      <button type="button" onClick={() => serNumber(2)}>
        2.Kindergarten
      </button>
      <button type="button" onClick={() => serNumber(3)}>
        3.Parents
      </button>
      <SwitchCaseFunction number = {number}/>
    </div>
  );
}
