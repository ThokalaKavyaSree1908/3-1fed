import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Calculator.js";
import MyImage from "./keypad.jpeg.png";
import cal1 from "./cal1.png";
const Main = () => {
    return (
     
    <div>
      <div className="article">
  
          <div class="MyContainer">
            
          
          <h2>Calculator Using React:</h2>
          <p>This claculator is used to perform the basic mathematical operations.First, let’s create the base application with the create react app command. Navigate into the project folder and run:<br/>
            <b> npx create-react-app calculator</b><br/>

            <b>cd calculator</b><br/>

            <b>npm start</b><br/></p>
            <p>Now let’s create calculator components for our application. Inside the src folder, create a component folder. It will contain all the components, js and css files</p>
            <p><span>Create these files:</span><br/>
                Calculator.css<br/>
                Calculator.js<br/>
                <div>It will contain the main app logic.</div><br/>
                CalculatorKey.js<br/>
                CalculatorKey.css<br/></p>
              <p><span>Now let's design our keypad for calculator:</span></p>
            <div>
              <p>Our keypad is a bunch of buttons that will do something when clicked. They are organized in different divs by groups that represent specific logic. It will help us to style their position with Grid later. Each button is a reference to a Keypad component. The father component (Calculator) passes the keyValue data that contains the key symbol to the child component (CalculatorKey) and when the key is pressed, the CalculatorKey component will return data to the handleOperation function. And what does the handleOperation function do? It will get the data about the key that was pressed and activate the relevant function. We will store and manage our data by using React Hooks.In order to do this, we need to import the useState and useEffect Hooks from React:</p>
              <p>Then we need to declare some state variablesinside the Calculator  that will store our data</p>
              <p><span>Lets design keypad as below:</span></p>
              <img src={MyImage} height="270px" width="250"/>
              <p>Calculator.js contains following code:</p>
              <p><pre>{`
                import React, { useState, useEffect } from "react";
                import CalculatorKey from "./CalculatorKey";
                import "./Calculator.css";

                function Calculator() {
                  const [prevValue, setPrevValue] = useState(null);
                  const [nextValue, setNextValue] = useState("0");
                  const [op, setOp] = useState(null);

                  useEffect(() => {}, [op, nextValue, prevValue]);

                  const CalculatorOperations = {
                    "/": (firstValue, secondValue) => firstValue / secondValue,
                    "*": (firstValue, secondValue) => firstValue * secondValue,
                    "+": (firstValue, secondValue) => firstValue + secondValue,
                    "-": (firstValue, secondValue) => firstValue - secondValue,
                    "=": ( secondValue) => secondValue,
                  };

                  const performOperation = () => {
                    let temp = CalculatorOperations[op](
                      parseFloat(prevValue),
                      parseFloat(nextValue)
                    );
                    setOp(null);
                    setNextValue(String(temp));
                    setPrevValue(null);
                  };

                  const handleNum = (number) => {
                    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
                  };

                  const insertDot = () => {
                    if (!/\./.test(nextValue)) {
                      setNextValue(nextValue + ".");
                    }
                  };
                  const percentage = () => {
                    setNextValue(parseFloat(nextValue) / 100);
                    if (prevValue && nextValue === "") {
                      setPrevValue(parseFloat(prevValue) / 100);
                    }
                  };
                  const changeSign = () => {
                    setNextValue(parseFloat(nextValue) * -1);
                  };
                  const clearData = () => {
                    setNextValue("0");
                    setPrevValue(0);
                  };

                  const handleOperation = (value) => {
                    if (Number.isInteger(value)) {
                      handleNum(parseInt(value, 10));
                    } else if (value in CalculatorOperations) {
                      if (op === null) {
                        setOp(value);
                        setPrevValue(nextValue);
                        setNextValue("");
                      }
                      if (op) {
                        setOp(value);
                      }
                      if (prevValue && op && nextValue) {
                        performOperation();
                      }
                    } else if (value === "c") {
                      clearData();
                    } else if (value === "\xB1") {
                      changeSign();
                    } else if (value === ".") {
                      insertDot();
                    } else if (value === "%") {
                      percentage();
                    }
                  };

                  return (
                    <div className="calculator">
                      <div className="calculator-input">
                        <div className="result">{nextValue} </div>
                      </div>
                      <div className="calculator-keypad">
                        <div className="keys-function">
                          <CalculatorKey keyValue={"c"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"%"} onClick={handleOperation} />
                        </div>
                        <div className="keys-operators">
                          <CalculatorKey keyValue={"+"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"-"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"*"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"/"} onClick={handleOperation} />
                          <CalculatorKey keyValue={"="} onClick={handleOperation} />
                        </div>
                        <div className="keys-numbers">
                          <CalculatorKey keyValue={9} onClick={handleOperation} />
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
                          />
                        </div>
                      </div>
                    </div>
                  );
                }

                export default Calculator;`}</pre></p>
              <p><span>CalculatorKey.js contains following code:</span></p>
              <p><pre>{`
              import React from "react";
              import "./CalculatorKey.css";function CalculatorKey(props) {
              function CalculatorKey(props) {
                return ( 
                  <button className={props.className}
                     onClick={() => props.onClick(props.keyValue)}
                   />
                   {props.keyValue}{" "}
                   </button>
                 );
               }
               
               export default CalculatorKey;`}</pre></p>
               <p><span><p>Calculator.css contains following code:</p></span></p>
               <p><pre>{`
               .calculator {
                width: 20rem;
                height: 30rem;
                background-color: lightpink;
                display: grid;
                padding: 1%;
               
                top:40%;
                bottom: 50;
                left: 40%;
                right: 40;
                margin:170px;
                border: ridge;
                margin-top:auto;
                margin-left: auto;
                margin-bottom: auto;
                margin-right:auto;
              }
              
              .keys-numbers {
                grid-area: keys-numbers;
                direction: rtl;
              }
              
              .keys-numbers .key-zero {
                width: 9.1rem;
                text-align: left;
                padding-left: 15%;
              }
              .keys-operators {
                grid-area: keys-operators;
              }
              .keys-function {
                grid-area: keys-function;
              }
              .calculator-keypad {
                padding-top: 0.3rem;
                background-color: lightblue;
                display: grid;
                grid-template-columns: repeat(4, 5rem);
                grid-template-rows: repeat(5, 5rem);
                grid-template-areas: "keys-function keys-function keys-function keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators";
              }
              .calculator-input {
                border-color: black;
                border: ridge;
                text-align: right;
                padding-right: 10%;
                font-weight: bold;
                font-size: 30px;
              }
              .result {
                min-height: 3rem;
                color: #666666;
              }`}</pre></p>
               <p><span><p>CalculatorKey.css contains following code:</p></span></p>
               <p><span>{`
                button {
                  width: 4.2rem;
                  height: 4.2rem;
                  margin: 0.4rem;
                  text-align: center;
                  font-size: 150%;
                  border-radius: 0.8rem;
                  
                }`}</span></p>
                <p><span><b>Output:</b></span></p><br/>
              <div><MainContent/></div>
            </div>
          </div>
          
           
      </div>
      
      <Sidebar />
    </div>
    
  )
};

export default Main;