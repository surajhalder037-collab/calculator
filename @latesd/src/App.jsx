
import { useState } from "react";



function Cal() {
let [displayValue, setDisplayValue] = useState("0");




  let numbers = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0"
  ];

  let operators = [
    "+", "−", "×", "÷", "%"
  ];

  let actions = [
    "AC", "⌫", ".", "="
  ];

  


  return (
    <div className="calculator" >

    <div className="display">{displayValue}</div>

    <div className="buttons">

        {actions.map((action) => {
          return <button key={action}>{action}</button>;
        })}
        {operators.map((operator) => {
          return <button className="operator" key={operator}>{operator}</button>;
        })}
        {numbers.map((number) => {
          return <button onClick={() => { setDisplayValue(number) }} key={number}>{number}</button>;
        })}
     

  


      {/* <button class="clear">AC</button>
        <button></button> */}
      {/* <button>%</button>
      <button class="operator">÷</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="operator">×</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="operator">−</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="operator">+</button>

      <button class="zero">0</button>
      <button>.</button>
      <button class="equal">=</button> */}
    </div>

  </div >
  );
}
export default Cal;