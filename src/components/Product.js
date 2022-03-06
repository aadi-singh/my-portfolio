import React from "react";
import "./Product.css";
import { Card } from "react-bootstrap";





const Product = (props) => {
    const renderArt = props.artWork.map((a) => {
        return(
            
            <div id="a" className="card ms-5 mt-5" style={{ width: '29rem' }}>
             <div className="card_1">
            <div className="card_border">
                
                <a target="_blank" href="https://www.behance.net/gallery/137299661/Digital-Art-Posters"><img src={a.num} alt="art" className="image"/></a>
                <div className="title"></div>
                </div>
                <div className="circle">  </div>
                <div className="circle" id="c">  </div>
                <div className="circle"  id="b">  </div>
                </div>
            </div>)
        })

    return (
        <div className="container-fluid">
            <div className="margin"></div>

                <div className="padding">
                    <h1 className="heading1"> Keep it Simple ! and Comforting !!</h1>
                    <div className="row">

                       {renderArt}
                            
                    </div>
                </div>
           
        </div>
    )
}



export default Product;