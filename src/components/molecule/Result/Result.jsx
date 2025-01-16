import React from "react";
import "./Result.css";
import ResultCircle from "../../atoms/resultCircle/resultCircle";
function Result() {
  return (
    <>
      <div className="result_container">
        <div className="result_heading">
          <h1>Your Result</h1>
        </div>
        <ResultCircle />
        <div className="result_description">
          <h2>Great</h2>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
    </>
  );
}
export default Result;
