import React from "react";
import '../../molecule/Summary/Summary.css'
import img from '../../../assets/images/iconoir_brain.png'
function Memory(){
    return (
        <>
        <div className="score_category_container yellow_background">
                    <div className="category_box">
                        <img src={img} alt="" />
                        <h2 className="cl_yellow">Memory</h2>
                    </div>
                    <div className="category_score">
                        <p>92 <span> / 100</span></p>
                    </div>
                </div>
        </>
    )
}

export default Memory;