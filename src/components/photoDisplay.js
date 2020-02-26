import React from "react";

function PhotoDisplay(props) {
    return(
        <img src={props.url} alt="anime girl" id={props.id}
        onClick={() => props.handleClick(props.id)}></img>
    )
}

export default PhotoDisplay;