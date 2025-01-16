import React  from "react"; 
import './Main.css';
import Result from '../molecule/Result/Result'
import Summary from "../molecule/Summary/Summary";
function Main() {
    return (

        <>
            <div className="main_container">
                <Result />
                <Summary />
            </div>
        </>
    )
}

export default Main;