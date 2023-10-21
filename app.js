import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", 
// {id:"heading"}, 
// "Jai Hind from React"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement(
    "div",
    { id:"parent" }, 
    [React.createElement(
        "div",
        { id:"child" },
        [React.createElement(
            "h1",
            {},
            "I am H1 Tag"),
            React.createElement(
                "h2",
                {},
                "I am H2 Tag")]
    ),React.createElement(
        "div",
        { id:"child2" },
        [React.createElement(
            "h1",
            {},
            "I am H1 Tag"),
            React.createElement(
                "h2",
                {},
                "I am H2 Tag")]
    )]
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);