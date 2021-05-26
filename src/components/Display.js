import React from "react";

const Display = ({ prevResult, result, clear }) => {
    return (
        <div>
            <div className="display-clear">
                <div className="display">
                    <div className="prev-result">{prevResult}</div>
                    <div className="current-result">{result}</div>
                </div>
                <button onClick={clear} className="clear button">
                    C
                </button>
            </div>
        </div>
    );
};

export default Display;
