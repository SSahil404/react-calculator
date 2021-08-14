import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import CalcBody from "../components/CalcBody";

const Calculator = ({ darkMode, setDarkMode }) => {
    const [result, setResult] = useState("");
    const [prevResult, setPrevResult] = useState("");

    const [prevOperand, setPrevOperand] = useState("");
    const [currOperand, setCurrOperand] = useState("");

    const [prevOperator, setPrevOperator] = useState("");
    const [currOperator, setCurrOperator] = useState("");

    const [equal, setEqual] = useState("");
    const [computation, setComputation] = useState("");

    const clear = () => {
        setPrevResult("");
        setPrevOperand("");
        setCurrOperator("");
        setCurrOperand("");
        setEqual("");
        setComputation("");
    };
    const appendNumber = number => {
        if (computation !== "") {
            setPrevResult(result);
            setPrevOperand("");
            setCurrOperator("");
            setCurrOperand("");
            setEqual("");
            setComputation("");
        } else if (number === "." && currOperand.includes(".")) return;
        else {
            // setCurrOperand("");
            setCurrOperand(currOperand.toString() + number.toString());
        }
    };
    const chooseOperator = currOperator => {
        if (currOperand === "") return;

        setCurrOperator(currOperator);

        if (computation !== "") {
            setPrevResult(result);
            setPrevOperand(computation);
            setEqual("");
            setComputation("");
        }

        if (prevOperand !== "" && currOperand !== "") {
            compute(currOperator);
            setPrevResult(result);
        } else {
            setPrevOperand(currOperand);
        }
        setPrevOperator(currOperator);
        setCurrOperand("");
    };
    const equalOperator = eq => {
        if (currOperand === "" || prevOperand === "") return;

        if (computation !== "") {
            setPrevResult(result);
            setPrevOperand("");
            setCurrOperator("");
            setCurrOperand("");
            setEqual("");
            setComputation("");
            return;
        }
        if (prevOperand !== "" && currOperand !== "") compute(eq);

        setEqual(eq);
    };

    const compute = op => {
        let res;
        const prev = parseFloat(prevOperand);
        const curr = parseFloat(currOperand);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (prevOperator) {
            case "+":
                res = prev + curr;
                break;
            case "-":
                res = prev - curr;
                break;
            case "*":
                res = prev * curr;
                break;
            case "/":
                res = prev / curr;
                break;
            default:
                return;
        }
        if (op !== "=") {
            setPrevOperand(res);
        } else {
            setComputation(res);
        }
    };

    const updateDisplay = () => {
        if (currOperator != null) {
            if (equal !== "") {
                setResult(`${prevOperand} ${currOperator} ${currOperand} ${equal} ${computation}`);
            } else {
                setResult(`${prevOperand} ${currOperator} ${currOperand}`);
            }
        } else {
            setResult("");
        }
    };

    useEffect(() => {
        updateDisplay();
    });

    return (
        <div className="calculator">
            <div className="theme-toggle">
                <input
                    onClick={() => setDarkMode(!darkMode)}
                    type="checkbox"
                    name="theme"
                    id="theme"
                />
            </div>

            <Display prevResult={prevResult} result={result} clear={clear} />
            <CalcBody
                appendNumber={appendNumber}
                chooseOperator={chooseOperator}
                equalOperator={equalOperator}
            />
        </div>
    );
};

export default Calculator;
