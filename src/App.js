import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState('Game on')
  const [currentPlayer, setCurrentPlayer] = useState('')

  const [but1, setBut1] = useState({ value: "1", isDisabled: false, className:"button" });
  const [but2, setBut2] = useState({ value: "2", isDisabled: false, className:"button" });
  const [but3, setBut3] = useState({ value: "3", isDisabled: false, className:"button" });
  const [but4, setBut4] = useState({ value: "4", isDisabled: false, className:"button" });
  const [but5, setBut5] = useState({ value: "5", isDisabled: false, className:"button" });
  const [but6, setBut6] = useState({ value: "6", isDisabled: false, className:"button" });
  const [but7, setBut7] = useState({ value: "7", isDisabled: false, className:"button" });
  const [but8, setBut8] = useState({ value: "8", isDisabled: false, className:"button" });
  const [but9, setBut9] = useState({ value: "9", isDisabled: false, className:"button" });
  let winConditions = [
    [but1,but2,but3],
    [but4,but5,but6],
    [but7,but8,but9],
    [but1,but4,but7],
    [but2,but5,but8],
    [but3,but6,but9],
    [but1,but5,but9],
    [but3,but5,but7]
  ]


  function putValue(setBut) {
    let value = "";
    if (count % 2 === 0) {
      value = "O";
    } else {
      value = "X";
    }

    setCurrentPlayer(value)
    console.log(value)
    setBut({ value: value, isDisabled: true });

    setCount(count + 1);    
  }


  useEffect(() => {
    
    if(count>4){
      if((but1.value===but2.value && but1.value===but3.value) || (but4.value===but5.value && but4.value===but6.value) || (but7.value===but8.value && but7.value===but9.value) || (but1.value===but5.value && but1.value===but9.value) || (but3.value===but5.value && but3.value===but7.value) || (but1.value===but4.value && but1.value===but7.value) || (but2.value===but5.value && but2.value===but8.value) || (but3.value===but6.value && but3.value===but9.value)){

        let condition1 = but1.value===but2.value && but1.value===but3.value;
        let condition2 = but4.value===but5.value && but4.value===but6.value;
        let condition3 = but7.value===but8.value && but7.value===but9.value;
        let condition4 = but1.value===but4.value && but1.value===but7.value;
        let condition5 = but2.value===but5.value && but2.value===but8.value;
        let condition6 = but3.value===but6.value && but3.value===but9.value;
        let condition7 = but1.value===but5.value && but1.value===but9.value;
        let condition8 = but3.value===but5.value && but3.value===but7.value;

        console.log(currentPlayer)
        if(currentPlayer==='X'){
          setResult('Player 1 wins!');
        } else {
          setResult("Player 2 wins!");
        }

        // but1.isDisabled=true;
        // but2.isDisabled=true;
        // but3.isDisabled=true;
        // but4.isDisabled=true;
        // but5.isDisabled=true;
        // but6.isDisabled=true;
        // but7.isDisabled=true;
        // but8.isDisabled=true;
        // but9.isDisabled=true;
      }
      else{
        if(count === 10){
          setResult('Game tied!');
        }
      }
    }
  
    
  }, [but1, but2, but3,but4,but5,but6,but7,but8,but9])
  


  return (
    <div className="App">
      <center>
        <h2 className="title">Tic-Tac-Toe</h2>
        <table>
          <tr>
            <td>
              <button
                className={ but1.className }
                onClick={() => putValue(setBut1)}
                disabled={but1.isDisabled}
              >
                {but1.value}
              </button>
            </td>
            <td>
              <button
                className={ but2.className }
                onClick={() => putValue(setBut2)}
                disabled={but2.isDisabled}
              >
                {but2.value}
              </button>
            </td>
            <td>
              <button
                className={ but3.className }
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
                className={ but4.className }
                onClick={() => putValue(setBut4)}
                disabled={but4.isDisabled}
              >
                {but4.value}
              </button>
            </td>
            <td>
              <button
                className={ but5.className }
                onClick={() => putValue(setBut5)}
                disabled={but5.isDisabled}
              >
                {but5.value}
              </button>
            </td>
            <td>
              <button
                className={ but6.className }
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
                className={ but7.className }
                onClick={() => putValue(setBut7)}
                disabled={but7.isDisabled}
              >
                {but7.value}
              </button>
            </td>
            <td>
              <button
                className={ but8.className }
                onClick={() => putValue(setBut8)}
                disabled={but8.isDisabled}
              >
                {but8.value}
              </button>
            </td>
            <td>
              <button
                className={ but9.className }
                onClick={() => putValue(setBut9)}
                disabled={but9.isDisabled}
              >
                {but9.value}
              </button>
            </td>
          </tr>
        </table>
        <h2> {result} </h2>
      </center>
    </div>
  );
}

export default App;
