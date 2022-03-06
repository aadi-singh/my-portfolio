import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./About.css";
import img1 from "../assets/aa1.png";
import { CgScrollV } from "react-icons/cg";





const About = () => {

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">  Hello , My name is </h2>
                    <h1 className="i-name"> Aaditya Rana</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Graphic Designer</div>
                            <div className="i-title-item"> Artist </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        <br />
                        here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                    </p>
                    <div >
                        <CgScrollV className="i-svg" />
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="abc">
                    <div className="efg">
                        <div className="i-bg" >
                        </div>
                        <div className="hover08">
                            <div>
                                <figure><img src={img1} alt="rana" className="i-img" /></figure>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default About;

<Container>

</Container>
