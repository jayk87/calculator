import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const Buttons = ({ handleClear, handleNumber, handleZero, handleDecimal, handleOperation, handleEquals }) => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "calc-grid" }, /*#__PURE__*/
    React.createElement("button", {
      id: "clear",
      onClick: handleClear }, "A/C"), /*#__PURE__*/

    React.createElement("button", {
      id: "divide",
      className: "operation",
      onClick: handleOperation }, "/"), /*#__PURE__*/

    React.createElement("button", {
      id: "seven",
      className: "number",
      onClick: handleNumber }, "7"), /*#__PURE__*/

    React.createElement("button", {
      id: "eight",
      className: "number",
      onClick: handleNumber }, "8"), /*#__PURE__*/

    React.createElement("button", {
      id: "nine",
      className: "number",
      onClick: handleNumber }, "9"), /*#__PURE__*/

    React.createElement("button", {
      id: "multiply",
      className: "operation",
      onClick: handleOperation }, "x"), /*#__PURE__*/

    React.createElement("button", {
      id: "four",
      className: "number",
      onClick: handleNumber }, "4"), /*#__PURE__*/

    React.createElement("button", {
      id: "five",
      className: "number",
      onClick: handleNumber }, "5"), /*#__PURE__*/

    React.createElement("button", {
      id: "six",
      className: "number",
      onClick: handleNumber }, "6"), /*#__PURE__*/

    React.createElement("button", {
      id: "subtract",
      className: "operation",
      onClick: handleOperation }, "-"), /*#__PURE__*/

    React.createElement("button", {
      id: "one",
      className: "number",
      onClick: handleNumber }, "1"), /*#__PURE__*/

    React.createElement("button", {
      id: "two",
      className: "number",
      onClick: handleNumber }, "2"), /*#__PURE__*/

    React.createElement("button", {
      id: "three",
      className: "number",
      onClick: handleNumber }, "3"), /*#__PURE__*/

    React.createElement("button", {
      id: "add",
      className: "operation",
      onClick: handleOperation }, "+"), /*#__PURE__*/

    React.createElement("button", {
      id: "zero",
      className: "number",
      onClick: handleZero }, "0"), /*#__PURE__*/

    React.createElement("button", {
      id: "decimal",
      onClick: handleDecimal }, "."), /*#__PURE__*/

    React.createElement("button", {
      id: "equals",
      onClick: handleEquals }, "=")));



};

const App = () => {
  const [firstNum, setFirstNum] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [display, setDisplay] = useState('0');
  const [answer, setAnswer] = useState('');

  const handleClear = () => {
    setFirstNum('');
    setOperator('');
    setSecondNum('');
    setDisplay('0');
    setAnswer('');
  };
  const handleNumber = event => {
    let num = event.target.innerHTML;
    if (answer != '') {
      setFirstNum(num);
      setDisplay(num);
      setAnswer('');
    } else if (display === '0') {
      setDisplay(num);
      if (operator == '') {
        setFirstNum(num);
      } else {
        setSecondNum(num);
      }
    } else
    if (operator != '' && secondNum == '') {
      setDisplay(num);
      setSecondNum(num);
    } else
    {
      setDisplay(display + num);
      if (secondNum == '') {
        setFirstNum(firstNum + num);
      } else {
        setSecondNum(secondNum + num);
      }
    };
  };

  const handleZero = event => {
    if (answer != '') {
      setAnswer('');
      setFirstNum('0');
      setDisplay('0');
    } else if (display === '0') {return;} else
    if (/[\+\-\*\/]/.test(display)) {
      setDisplay('0');
      setSecondNum('0');
    } else {
      setDisplay(display + '0');
      if (secondNum == '') {
        setFirstNum(firstNum + '0');
      } else {
        setSecondNum(secondNum + '0');
      }
    }
  };
  const handleDecimal = event => {
    if (answer != '') {
      setAnswer('');
      setFirstNum('0.');
      setDisplay('0.');
    } else if (/[\+\-\*\/]/.test(display)) {
      setDisplay('0.');
      setSecondNum('0.');
    } else if (display == '0') {
      setDisplay('0.');
      if (operator == '') {
        setFirstNum('0.');
      } else {
        setSecondNum('0');
      }
    } else if (/\./.test(display)) {return;} else
    {
      setDisplay(display + '.');
      if (operator == '') {
        setFirstNum(firstNum + '.');
      } else {setSecondNum(secondNum + '.');}
    }
  };
  const handleOperation = event => {
    let symbol = event.target.innerHTML == 'x' ? '*' : event.target.innerHTML;
    console.log(symbol);
    setAnswer('');
    if (secondNum != '') {
      handleEquals();
      setAnswer('');
      setOperator(symbol);
      setDisplay(symbol);
    } else if (firstNum == '') {
      if (symbol == '-') {
        setDisplay('-');
        setFirstNum('-');
      } else {return;}
    } else if (operator != '') {
      if (symbol == '-' && operator.length == 1) {
        setOperator(operator + ' -');
        setDisplay(display + '-');
      } else {
        setOperator(symbol);
        setDisplay(symbol);
      }
    } else {
      setOperator(symbol);
      setDisplay(symbol);
    }
  };
  const handleEquals = () => {
    let calc = eval(document.getElementById('current-calc').innerHTML);
    console.log(calc);
    if (calc == undefined) {calc = '0';};
    setDisplay('');
    setAnswer(calc);
    setOperator('');
    setSecondNum('');
    setFirstNum(calc);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "calculator" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "current-calc" }, firstNum, " ", operator, " ", secondNum), /*#__PURE__*/
    React.createElement("div", { id: "display" }, display, answer), /*#__PURE__*/
    React.createElement(Buttons, {
      handleClear: handleClear,
      handleNumber: handleNumber,
      handleZero: handleZero,
      handleDecimal: handleDecimal,
      handleOperation: handleOperation,
      handleEquals: handleEquals }))));



};

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));