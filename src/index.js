//this import is not important in modern day react but we are doing it anyway
import React from "react";
//essential import
import ReactDom from "react-dom";

//main component where we are supposed
import App from "./App";

// ReactDom.render()
//main file where we will mount all the components
//the root is a div which will contain the whole application
ReactDom.render(<App />, document.getElementById("root"));
