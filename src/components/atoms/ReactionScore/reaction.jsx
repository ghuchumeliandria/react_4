import React from "react";
import '../../molecule/Summary/Summary.css'
import img from "../../../assets/images/iconoir_flash.png"
function Reaction(){
    return (
        <>
        <div className="score_category_container red_background">
            <div className="category_box">
                <img src={img} alt="" />
                <h2 className="cl_red">Reaction</h2>
            </div>
            <div className="category_score">
                <p>80 <span> / 100</span></p>
            </div>
        </div>
        </>
    )
}

export default Reaction;