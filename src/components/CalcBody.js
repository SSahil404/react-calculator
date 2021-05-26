import React from "react";

const CalcBody = ({ appendNumber, chooseOperator, equalOperator }) => {
    return (
        <div>
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
                <button onClick={() => chooseOperator("+")} className="currOperator button">
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
                <button onClick={() => chooseOperator("-")} className="currOperator button">
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
                <button onClick={() => chooseOperator("*")} className="currOperator button">
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
                <button onClick={() => chooseOperator("/")} className="currOperator button">
                    /
                </button>
            </div>
        </div>
    );
};

export default CalcBody;
