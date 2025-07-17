// create a element


// const header1 = document.createElement("h1");
// header1.innerText = "this is the starting of react";
// header1.style.backgroundColor = "pink";
// header1.style.color = "red";


// const header2 = document.createElement("h2");
// header2.innerText = "this is the starting of react";
// header2.style.backgroundColor = "green";
// header2.style.color = "white";


// const roots = document.getElementById("roots");
// roots.appendChild(header1);
// roots.appendChild(header2);

//element create through react

// const React = {
//     createElement : (tag, context, styles) => {
//         const createtag = document.createElement(tag);

//         if(Array.isArray(context)){
//             for (const key of context) {
//                     createtag.appendChild(key);
//             }
//         }
        
//         else {
//         createtag.innerText = context;
//         }

//         for (let key in styles) {
//             createtag.style[key] = styles[key]; 
//         }
    
//          return createtag;
        
//     }
    
// }

// const reactDom = {
//     render : (parentnodeid, childbnode) => {
//         const parentnode = document.getElementById(parentnodeid);
//         parentnode.appendChild(childbnode);
//     }
// }
// const tag1 = React.createElement('h3', "Hello coder army", {backgroundColor : "pink", color : "red"});
// const tag2 = React.createElement("p", " I am little much in trouble", {backgroundColor : "yellow", color : "black"});
// const li1 = React.createElement("li","HTML",{});
// const li2 = React.createElement("li","CSS",{});
// const li3 = React.createElement("li","JS",{});
// const tag3 = React.createElement("ul",[li1,li2,li3],{});
// reactDom.render("roots", tag1);
// reactDom.render("roots",tag2);
// reactDom.render("roots",tag3);




// document.getElementById("roots").appendChild(header3);