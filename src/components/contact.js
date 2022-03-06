
import React from 'react';
import "./contact.css";
import { FiPhoneCall } from 'react-icons/fi';
import { SiMinutemailer } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {

    return (
        <div className='container_1'>
            <div className='container_2'>
                <div className='c-left'>
                    <div className='c-left-wrapper'>
                        <div className='c-left-title'>
                            <h1 className='c-heading_1'> Got Any Opportunity <br />For Me ? </h1>
                            <p className='c-left-para'> Feel free to connect with me.</p>
                            <FiPhoneCall className='phone' />
                            <span className='number'> + 91 8428258385 </span>
                            <SiMinutemailer className='email' />
                            <spna className="number" id="n-1">aadityaranasingh04@yahoo.com</spna>
                            <GrMapLocation className='location' />
                            <div className="number" id="n-2">Based Out Of Agra ,<br /> Uttar Pradesh, INDIA </div>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <div className='c-right-wrapper'>
                        <div className='c-right-text'>
                            <div className='c-right-heading'>
                               <span className='bold'>Got any job for Me?</span>  Get in touch . I'am available for Full time Job <br /> Opportinities and  Freelance if right project comes along  or for<br />any Good Cause .
                            </div>
                            <form>  
                                <div className='form-group'>
                                    <label for="name" className='label'>Username &nbsp; : &nbsp;  &nbsp; </label>
                                    <input type="text" name="name" id="name" style={{width:'30%'}} className="input-name" placeholder='Name'></input>
                                    </div>
                                    <div className='form-group'>
                                    <label for="name" className='label1'>Subject &nbsp; : &nbsp;  &nbsp; </label>
                                    <input type="text" name="name" id="subject" style={{width:'30%'}} className="input-subject" placeholder='Subject'></input>
                                    </div>
                                    <div className='form-group'>
                                    <label for="name" className='label2'>Email &nbsp; : &nbsp;  &nbsp; </label>
                                    <input type="text" name="email" id="email" style={{width:'30%'}} className="input-email" placeholder='Email'></input>
                                    </div>
                                    <div className='form-group'>
                                    <label for="name" className='label3'>Message &nbsp; : &nbsp;  &nbsp; </label>
                                    <textarea placeholder="Message" rows='5' className='textarea'></textarea>
                                    <button type='submit'  className='button'> Submit </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Contact;