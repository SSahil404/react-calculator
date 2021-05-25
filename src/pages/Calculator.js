import React, { useState, useEffect } from "react";

const Calculator = ({ darkMode, setDarkMode }) => {
    const [result, setResult] = useState("");
    const [prevResult, setPrevResult] = useState("");

    const [prevOperand, setPrevOperand] = useState("");
    const [currOperand, setCurrOperand] = useState("");
    const [operator, setOperator] = useState("");
    const [equal, setEqual] = useState("");

    const [computation, setComputation] = useState("");

    const clear = () => {
        setPrevResult("");
        setPrevOperand("");
        setOperator("");
        setCurrOperand("");
        setEqual("");
        setComputation("");
    };
    const appendNumber = (number) => {
        if (computation !== "") {
            setPrevResult(result);
            setPrevOperand("");
            setOperator("");
            setCurrOperand("");
            setEqual("");
            setComputation("");
        } else if (number === "." && currOperand.includes(".")) return;
        else {
            // setCurrOperand("");
            setCurrOperand(currOperand.toString() + number.toString());
        }
    };
    const chooseOperator = (operator) => {
        if (currOperand === "" || prevOperand !== "") return;
        setOperator(operator);
        setPrevOperand(currOperand);
        setCurrOperand("");
    };
    const equalOperator = (eq) => {
        if (currOperand === "") return;

        if (prevOperand !== "" && currOperand !== "") {
            compute();
        }
        setEqual(eq);
    };

    const compute = () => {
        let res;
        const prev = parseFloat(prevOperand);
        const curr = parseFloat(currOperand);

        if (isNaN(prev) || isNaN(curr)) return;
        switch (operator) {
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

        setComputation(res);
        console.log(computation);
    };

    const getDisplayNumber = (number) => {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    };
    const updateDisplay = () => {
        setResult(getDisplayNumber(currOperand));
        if (operator != null) {
            setResult(`${prevOperand} ${operator} ${currOperand} ${equal} ${computation}`);
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

            <div className="display-clear">
                <div className="display">
                    <div className="prev-result">{prevResult}</div>
                    <div className="current-result">{result}</div>
                </div>
                <button onClick={clear} className="clear button">
                    C
                </button>
            </div>

            <div className="calc-body">
                <button onClick={() => appendNumber(7)} className="number button">
                    7
                </button>
                <button onClick={() => appendNumber(8)} className="number button">
                    8
                </button>
                <button onClick={() => appendNumber(9)} className="number button">
                    9
                </button>
                <button onClick={() => chooseOperator("+")} className="operator button">
                    +
                </button>
                <button onClick={() => appendNumber(4)} className="number button">
                    4
                </button>
                <button onClick={() => appendNumber(5)} className="number button">
                    5
                </button>
                <button onClick={() => appendNumber(6)} className="number button">
                    6
                </button>
                <button onClick={() => chooseOperator("-")} className="operator button">
                    -
                </button>
                <button onClick={() => appendNumber(1)} className="number button">
                    1
                </button>
                <button onClick={() => appendNumber(2)} className="number button">
                    2
                </button>
                <button onClick={() => appendNumber(3)} className="number button">
                    3
                </button>
                <button onClick={() => chooseOperator("*")} className="operator button">
                    *
                </button>
                <button onClick={() => appendNumber(".")} className="number button">
                    .
                </button>
                <button onClick={() => appendNumber(0)} className="number button">
                    0
                </button>
                <button onClick={() => equalOperator("=")} className="equal button">
                    =
                </button>
                <button onClick={() => chooseOperator("/")} className="operator button">
                    /
                </button>
            </div>
        </div>
    );
};

export default Calculator;
