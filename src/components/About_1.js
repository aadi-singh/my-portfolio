import React from 'react';
import ReactDOM from 'react-dom';
import "../components/About_1.css";
import img from "../assets/img_2.png"



const About1 = () => {
    return (

        <div className='a' >
            <div className='a-left'>
               
                <div >
                <div className='svg1'></div>
                
                
        <div class="grid">
          <figure class="effect-layla">
            <img src={img} alt="parvati"/>
            <figcaption>
              <h2> Werifesteria </h2>
              <p>When Layla appears, she brings an eternal summer along.</p>
              <a href="#">View more</a>
            </figcaption>     
          </figure>
                   </div>
            </div>
            </div>
            <div className='a-right'>
                <div className='svg' transform="scale(2,2) scale(-1,1) " ></div>
                <div className='a-right-wrapper'>
                    <div className='a-right-title'>
                        <h1 className='heading' >About Me</h1>
                        <div className='heading-div'>
                            <h3 className='heading2'>it is a long establised fact that reader will be distracted by the readable
                                content
                            </h3>
                            <p className='a-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    )
}


export default About1;