import React from "react";
import "./Summary.css"
import Reaction from "../../atoms/ReactionScore/reaction";
import Memory from "../../atoms/MemoryScore/Memory";
import Verbal from "../../atoms/verbalScore/Verbal";
import Visual from "../../atoms/visualScore/visual";
import Button from "../../atoms/summaryBtn/button";

function Summary(){
    return (
        <>
        <div className="summary_container">
            <div className="summary_heading">
                <h1>Summary</h1>
            </div>
            <div className="score_category">
                <Reaction />
                <Memory />
                <Verbal />
                <Visual />
            </div>
                <Button />
        </div>
        </>
    )
}
export default Summary;