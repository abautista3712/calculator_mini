import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";
import "./Calculator.css";

const Calculator = () => {
  const [previousValue, setPreviousValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [operation, setOperation] = useState(null);

  useEffect(() => {}, [operation, nextValue, previousValue]);

  const CalculatorOperations = {
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "=": (x, y) => y,
  };

  const performOperation = () => {
    let tmp = CalculatorOperations[operation](
      parseFloat(previousValue),
      parseFloat(nextValue)
    );
    setOperation(null);
    setNextValue(String(tmp));
    setPreviousValue(null);
  };

  const handleOperation = (value) => {};

  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result"></div>
        {/* <div className="result">{results}</div> */}
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          {/* <CalculatorKey keyValue={"c"} onClick={handleOperation} />
          <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
          <CalculatorKey keyValue={"%"} onClick={handleOperation} /> */}
        </div>
        <div className="keys-operators">
          {/* <CalculatorKey keyValue={"+"} onClick={handleOperation} />
          <CalculatorKey keyValue={"-"} onClick={handleOperation} />
          <CalculatorKey keyValue={"*"} onClick={handleOperation} />
          <CalculatorKey keyValue={"/"} onClick={handleOperation} />
          <CalculatorKey keyValue={"="} onClick={handleOperation} /> */}
        </div>
        <div className="keys-numbers">
          {/* <CalculatorKey keyValue={9} onClick={handleOperation} />
          <CalculatorKey keyValue={8} onClick={handleOperation} />
          <CalculatorKey keyValue={7} onClick={handleOperation} />
          <CalculatorKey keyValue={6} onClick={handleOperation} />
          <CalculatorKey keyValue={5} onClick={handleOperation} />
          <CalculatorKey keyValue={4} onClick={handleOperation} />
          <CalculatorKey keyValue={3} onClick={handleOperation} />
          <CalculatorKey keyValue={2} onClick={handleOperation} />
          <CalculatorKey keyValue={1} onClick={handleOperation} />
          <CalculatorKey
            className="key-dot"
            keyValue={"."}
            onClick={handleOperation}
          />
          <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={handleOperation}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
