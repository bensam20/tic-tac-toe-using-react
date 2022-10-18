import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState('Game on')

  const [but1, setBut1] = useState({ value: "1", isDisabled: false });
  const [but2, setBut2] = useState({ value: "2", isDisabled: false });
  const [but3, setBut3] = useState({ value: "3", isDisabled: false });
  const [but4, setBut4] = useState({ value: "4", isDisabled: false });
  const [but5, setBut5] = useState({ value: "5", isDisabled: false });
  const [but6, setBut6] = useState({ value: "6", isDisabled: false });
  const [but7, setBut7] = useState({ value: "7", isDisabled: false });
  const [but8, setBut8] = useState({ value: "8", isDisabled: false });
  const [but9, setBut9] = useState({ value: "9", isDisabled: false });

  const winnings = [
    [but1, but2, but3],
    [but4, but5, but6],
    [but7, but8, but9],
    [but1, but4, but7],
    [but2, but5, but8],
    [but3, but6, but9],
    [but1, but5, but9],
    [but3, but5, but7]
  ]
  function gameLogic(currentPlayer) {
  
    if(count>4){
      if((but1.value===but2.value && but1.value===but3.value) || (but4.value===but5.value && but4.value===but6.value) || (but7.value===but8.value && but7.value===but9.value) || (but1.value===but5.value && but1.value===but9.value) || (but3.value===but5.value && but3.value===but7.value) || (but1.value===but4.value && but1.value===but7.value) || (but2.value===but5.value && but2.value===but8.value) || (but3.value===but6.value && but3.value===but9.value)){
        console.log(but1.value===but2.value && but1.value===but3.value)
        console.log(but4.value===but5.value && but4.value===but6.value)
        console.log(but7.value===but8.value && but7.value===but9.value)
        console.log(but1.value===but4.value && but1.value===but7.value)
        console.log(but2.value===but5.value && but2.value===but8.value)
        console.log(but3.value===but6.value && but3.value===but9.value)
        console.log(but1.value===but5.value && but1.value===but9.value)
        console.log(but3.value===but5.value && but3.value===but7.value)

        if(currentPlayer==='X'){
          setResult('Player 2 wins');
        } else {
          setResult("Player 1 wins");
        }
        but1.isDisabled=true;
        but2.isDisabled=true;
        but3.isDisabled=true;
        but4.isDisabled=true;
        but5.isDisabled=true;
        but6.isDisabled=true;
        but7.isDisabled=true;
        but8.isDisabled=true;
        but9.isDisabled=true;
      }
    }
  }

  function putValue(setBut) {
    let value = "";
    if (count % 2 === 0) {
      value = "O";
    } else {
      value = "X";
    }

    setBut({ value: value, isDisabled: true });
    let currentPlayer = value;
    setCount(count + 1);
    // console.log(currentPlayer);
    gameLogic(currentPlayer);
    
  }

  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <button
              onClick={() => putValue(setBut1)}
              disabled={but1.isDisabled}
            >
              {but1.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut2)}
              disabled={but2.isDisabled}
            >
              {but2.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut3)}
              disabled={but3.isDisabled}
            >
              {but3.value}
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => putValue(setBut4)}
              disabled={but4.isDisabled}
            >
              {but4.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut5)}
              disabled={but5.isDisabled}
            >
              {but5.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut6)}
              disabled={but6.isDisabled}
            >
              {but6.value}
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => putValue(setBut7)}
              disabled={but7.isDisabled}
            >
              {but7.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut8)}
              disabled={but8.isDisabled}
            >
              {but8.value}
            </button>
          </td>
          <td>
            <button
              onClick={() => putValue(setBut9)}
              disabled={but9.isDisabled}
            >
              {but9.value}
            </button>
          </td>
        </tr>
      </table>
      <div> {result} </div>
      <div>{but1.value}  {but2.value}  {but3.value}</div>
      <div>{but4.value}  {but5.value}  {but6.value}</div>
      <div>{but7.value}  {but8.value}  {but9.value}</div>
    </div>
  );
}

export default App;
