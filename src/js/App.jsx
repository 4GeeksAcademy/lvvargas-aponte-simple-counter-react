import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import Control from "./component/Control";


const App = (props) => {

    const clockIcon = <FontAwesomeIcon icon={faClock} />

    //leaving for logic demo, but does not currently work
    const handlePlay = () => {
        clearInterval(props.currIntervalID);
        let counter = 0;

        const newIntervalId = setInterval(() => {
            let four = Math.floor(counter / 1000) % 10;
            let three = Math.floor(counter / 100) % 10;
            let two = Math.floor(counter / 10) % 10;
            let one = Math.floor(counter / 1) % 10;
            //console.log(four, three, two, one);

            counter++;
            ReactDOM.render(<App currIntervalId={newIntervalId} posOne={one} posTwo={two} posThree={three} posFour={four} />, document.querySelector("#app"));
        }, 1000)


    }



    const handlePause = () => {
        clearInterval(props.intervalId);
    }

    //leaving for logic demo, but does not currently work
    const handleStop = () => {
        clearInterval(props.intervalId);
        props.posFou = 0;

    }



    return (
        <div className="container py-5">
            <div className="row mb-5 justify-content-center text-center">
                <div className="col-2 mx-auto">{clockIcon}</div>
                <div className="col-2 mx-auto">{props.posFour}</div>
                <div className="col-2 mx-auto">{props.posThree}</div>
                <div className="col-2 mx-auto">{props.posTwo}</div>
                <div className="col-2 mx-auto">{props.posOne}</div>
            </div>
            <Control onPause={handlePause} onPlay={handlePlay} onStop={handleStop} />
        </div >
    );
}

App.propTypes = {
    posOne: PropTypes.number,
    posTwo: PropTypes.number,
    posThree: PropTypes.number,
    posFour: PropTypes.number,
    intervalId: PropTypes.number,
    currIntervalID: PropTypes.number
};

export default App;