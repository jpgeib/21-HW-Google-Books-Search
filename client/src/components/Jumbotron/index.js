import React from "react";
import "./style.css";

const Jumbotron = ({ children }) => {
    return(
        <div className="jumbotron mt-4">
            {children}
        </div>
    );
}

export default Jumbotron;

