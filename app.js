const element = React.createElement("h1",{id:"first", className : "firsts", style: {backgroundColor:"red" , color: "blue"}},"Hello coder army");
const element2 = React.createElement("h2",{id:"first", className : "firsts", style: {backgroundColor:"black" , color: "white"}},"it is too complex");
// ReactDOM.render(element,document.getElementById("roots"));
const root = ReactDOM.createRoot(document.getElementById("roots"));
const div1 = React.createElement("div",{},[element,element2]);
root.render(div1);
// root.render(element);
// const root2 = ReactDOM.createRoot(document.getElementById("roots"));
// root2.render(element2);