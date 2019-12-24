import React from "react";

export default function Score(props) {
    let styles = {
        backgroundColor: "#5133A4",
        color: "white",
        fontSize: 45
    };

    let titlestyles = {
        color: "white",
        fontWeight: "bold"
    };
    return (
        <div className="row sticky-top" style={styles}>
            <span className="col-sm-4 text-center">
                <a href="https://clickygameiw.herokuapp.com/" style={titlestyles}>Clicky Game</a>
            </span>
            <span className="col-sm-4 text-center">{props.message}</span>
            <span className="col-sm-4 text-center">Score: {props.score} | Top Score: {props.topScore}</span>
        </div>
    );
}