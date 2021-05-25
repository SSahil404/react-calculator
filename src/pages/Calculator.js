import React from "react";

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="theme-toggle">
                <input type="checkbox" name="theme" id="theme" />
            </div>

            <div className="display-clear">
                <div className="display">
                    <div className="prev-result">999</div>
                    <div className="current-result">9999</div>
                </div>
                <button className="clear button">C</button>
            </div>

            <div className="calc-body">
                <button className="number button">7</button>
                <button className="number button">8</button>
                <button className="number button">9</button>
                <button className="operator button">+</button>
                <button className="number button">4</button>
                <button className="number button">5</button>
                <button className="number button">6</button>
                <button className="operator button">-</button>
                <button className="number button">1</button>
                <button className="number button">2</button>
                <button className="number button">3</button>
                <button className="operator button">*</button>
                <button className="number button">.</button>
                <button className="number button">0</button>
                <button className="equal button"> = </button>
                <button className="operator button">/</button>
            </div>
        </div>
    );
};

export default Calculator;
