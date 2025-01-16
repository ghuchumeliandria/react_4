import React from "react";
import '../../molecule/Summary/Summary.css'
import img from "../../../assets/images/iconoir_chat-remove.png"
function Verbal(){
    return (
        <>
        <div className="score_category_container green_background">
                    <div className="category_box">
                        <img src={img} alt="" />
                        <h2 className="cl_green">Verbal</h2>
                    </div>
                    <div className="category_score">
                        <p>61 <span> / 100</span></p>
                    </div>
                </div>
        </>
    )
}

export default Verbal;