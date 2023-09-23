//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';


// include your styles into the webpack bundle
import "../styles/index.scss";

//import your own components
import App from "./App";

//render your react application


let intervalId = 0;
let currentIntervalId;
let counter = 0;


intervalId = setInterval(() => {
    let four = Math.floor(counter / 1000) % 10;
    let three = Math.floor(counter / 100) % 10;
    let two = Math.floor(counter / 10) % 10;
    let one = Math.floor(counter / 1) % 10;
    //console.log(four, three, two, one);

    counter++;
    ReactDOM.render(<App intervalId={intervalId} currIntervalID={currentIntervalId} posOne={one} posTwo={two} posThree={three} posFour={four} />, document.querySelector("#app"));
}, 1000)