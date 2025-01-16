import React from "react";
import '../../molecule/Summary/Summary.css'
import img from "../../../assets/images/iconoir_eye-empty.png"
function Visual(){
    return (
        <>
        <div className="score_category_container blue_background">
                    <div className="category_box">
                        <img src={img} alt="" />
                        <h2 className="cl_blue">Visual</h2>
                    </div>
                    <div className="category_score">
                        <p>73 <span> / 100</span></p>
                    </div>
                </div>
        </>
    )
}

export default Visual;