import React from "react";
import ReactDOM from "react-dom/client";


// const element = React.createElement("h1",{id:"first", className : "firsts", style: {backgroundColor:"red" , color: "blue"}},"Hello coder army");
// const element2 = React.createElement("h2",{id:"second", className : "firsts", style: {backgroundColor:"black" , color: "white"}},"I am sorry ");
// // ReactDOM.render(element,document.getElementById("roots"));
// const root = ReactDOM.createRoot(document.getElementById("roots"));
// const div1 = React.createElement("div",{},[element,element2]);
// root.render(div1);

// root.render(element);
// const root2 = ReactDOM.createRoot(document.getElementById("roots"));
// root2.render(element2);

// JSX = javascript xml , direct HTML code in js

let header = <h1>Good morning to all</h1>
const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(header);

