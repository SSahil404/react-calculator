import React, { useState } from "react";
import Calculator from "./pages/Calculator";

import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`App  ${darkMode ? "dark-mode" : ""}`}>
            <Calculator darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}

export default App;
