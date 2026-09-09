
import { useState } from "react";



function Cal() {
  let [displayValue, setDisplayValue] = useState([]);




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
          return <button onClick={() => {
            if (action === "AC") {
              { setDisplayValue([""]) }
            } else if (action === ".") {
              { setDisplayValue([...displayValue, action]) }
            }else if(action === "⌫"){
              setDisplayValue(displayValue.slice(0, -1));
            }
          }}

            key={action}>{action}</button>;
        })}
        {operators.map((operator) => {
          return <button onClick={() => { setDisplayValue([...displayValue, operator]) }} className="operator" key={operator}>{operator}</button>;
        })}
        {numbers.map((number) => {
          return <button onClick={() => { setDisplayValue([...displayValue, number]) }} key={number}>{number}</button>;
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