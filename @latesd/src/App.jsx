
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
    "+", "-", "*", "/", "%"
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
            } else if(action === "="){
              let ans = eval(displayValue.join(""));
              setDisplayValue([ans]);
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

      </div>

    </div >
  );
}
export default Cal;