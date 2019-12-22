import React from "react";

export default function Score(props) {
    return (
        <div className="row">
            <span className="col-sm-4 text-center">Clicky Game</span>
            <span className="col-sm-4 text-center">{props.message}</span>
            <span className="col-sm-4 text-center">Score: {props.score} | Top Score: {props.topScore}</span>
        </div>
    );
}