import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const [but1, setBut1] = useState({ value: "", isDisabled: false });
  const [but2, setBut2] = useState({ value: "", isDisabled: false });
  const [but3, setBut3] = useState({ value: "", isDisabled: false });
  const [but4, setBut4] = useState({ value: "", isDisabled: false });
  const [but5, setBut5] = useState({ value: "", isDisabled: false });
  const [but6, setBut6] = useState({ value: "", isDisabled: false });
  const [but7, setBut7] = useState({ value: "", isDisabled: false });
  const [but8, setBut8] = useState({ value: "", isDisabled: false });
  const [but9, setBut9] = useState({ value: "", isDisabled: false });

  function putValue(setBut) {
    let value = "";
    if (count % 2 === 0) {
      value = "O";
    } else {
      value = "X";
    }

    setBut({ value: value, isDisabled: true });
    setCount(count + 1);
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
      <div></div>
    </div>
  );
}

export default App;
