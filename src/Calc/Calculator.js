import { useState, useRef } from "react";
import "./Calc.css";
import calculator from '../Assets/calculator-image.png';

function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function calculate(e, operation) {
    e.preventDefault();
    const value = Number(inputRef.current.value);

    switch (operation) {
      case "add":
        setResult((result) => result + value);
        break;
      case "subtract":
        setResult((result) => result - value);
        break;
      case "multiply":
        setResult((result) => result * value);
        break;
      case "divide":
        setResult((result) => result / value);
        break;
      case "power":
        setResult((result) => Math.pow(result, value));
        break;
      case "sqrt":
        setResult(() => Math.sqrt(result));
        break;
      case "log":
        setResult(() => Math.log(result));
        break;
      case "percent":
        setResult(() => (result * value) / 100);
        break;
      case "sin":
        setResult(() => Math.sin(result));
        break;
      case "cos":
        setResult(() => Math.cos(result));
        break;
      case "tan":
        setResult(() => Math.tan(result));
        break;
      case "pi":
        setResult(() => Math.PI);
        break;
      default:
        break;
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  function clearAll(e) {
    e.preventDefault();
    inputRef.current.value = 0;
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Advanced Calculator</h1>
        <img src={calculator} alt="Calculator" className="calculator-img" />
      </div>
      <form>
        <button className="clear-button" onClick={clearAll}>Clear</button>
        <p ref={resultRef}>{result}</p>
        <input ref={inputRef} type="number" placeholder="Type a number" />

        <button onClick={(e) => calculate(e, "add")}>Add</button>
        <button onClick={(e) => calculate(e, "subtract")}>Subtract</button>
        <button onClick={(e) => calculate(e, "multiply")}>Multiply</button>
        <button onClick={(e) => calculate(e, "divide")}>Divide</button>
        <button onClick={(e) => calculate(e, "power")}>Power</button>
        <button onClick={(e) => calculate(e, "sqrt")}>√ Square Root</button>
        <button onClick={(e) => calculate(e, "log")}>Logarithm</button>
        <button onClick={(e) => calculate(e, "percent")}>Percentage</button>
        <button onClick={(e) => calculate(e, "sin")}>sin</button>
        <button onClick={(e) => calculate(e, "cos")}>cos</button>
        <button onClick={(e) => calculate(e, "tan")}>tan</button>
        <button onClick={(e) => calculate(e, "pi")}>π Pi</button>

        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default Calculator;
