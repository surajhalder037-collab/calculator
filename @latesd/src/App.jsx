
function Cal() {
  let buttons = [
    "AC", "⌫", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", ".", "="
  ];
  return (
    <div className="calculator" >

    <div className="display">0</div>

    <div className="buttons">

        {buttons.map((button) => {

          if (button === "+") {
            console.log("Plus button");
          } else {
            console.log("Other button");
          }

          return <button key={button}>{button}</button>;
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