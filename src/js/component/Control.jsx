import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop, faCirclePause, faCircleLeft, faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const Control = (props) => {
    let stop = props.clearInterval;
    let pause = props.onPause;

    const stopIcon = <FontAwesomeIcon icon={faCircleStop} />;
    const pauseIcon = <FontAwesomeIcon icon={faCirclePause} />;
    const playIcon = <FontAwesomeIcon icon={faCirclePlay} />;

    //leaving for logic demo, but does not currently work
    const handlePauseClick = () => {
        props.onPause();
    }

    const handlePlayClick = () => {
        props.onPlay();
    }

    //leaving for logic demo, but does not currently work
    const handleStopClick = () => {
        props.onStop();
    }


    return (
        <div className="row justify-content-center text-center">
            <button className="col-4 play" onClick={handlePlayClick}>{playIcon}</button>
            <button className="col-4 pause" onClick={handlePauseClick}>{pauseIcon}</button>
            <button className="col-4 stop" onClick={handleStopClick}>{stopIcon}</button>
        </div>
    )
}

export default Control;