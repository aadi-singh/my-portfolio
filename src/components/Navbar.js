import React from "react";

import "../components/Navbar.css";
import img1 from "../assets/img1.png";

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Stack from "react-bootstrap/Stack";




class NavBar extends React.Component {
    render() {
        

        const contact=()=>{
            return alert("Email : aadityaranasingh04@yahoo.com");
        }

        return (

            <React.Fragment>


                <Navbar bg="dark" variant="dark" className="justify-content-center">
                    <Nav>

                        <Stack gap={5} direction="horizontal">

                            <Navbar.Brand className="h1" href="http://9gag.com" target="_blank" sticky="top" >
                                <img alt="df" src={img1} width="80" height="80" /> 
                                {"         "}
                                PORTFOLIO
                            </Navbar.Brand>
                            < >
                                <Nav.Link target="_blank" href="https://aadi-singh.github.io/CourseEra-Test/mod2-solution/"><h5 className="h">PROJECT</h5></Nav.Link>
                                <Nav.Link href=".."><h5 className="h"> SKILLS </h5></Nav.Link>
                                <Nav.Link href=".."><h5 className="h">DIGITAL ART</h5></Nav.Link>
                                <NavDropdown className="ah" title="MORE">
                                    <NavDropdown.Item className="h" href="https://github.com/aadi-singh">Github</NavDropdown.Item>
                                    <NavDropdown.Item className="h" href="https://www.linkedin.com/in/aaditya-rana-93b92a13a" target="_blank">Linkdin</NavDropdown.Item>
                                    <NavDropdown.Item className="h" href=" https://www.behance.net/gallery/137299661/Digital-Art-Posters" target="_blank" >Behance</NavDropdown.Item>
                                    <NavDropdown.Item className="h" onClick={contact}>Contact Me</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        </Stack>

                    </Nav>

                </Navbar>


                


            </React.Fragment >

        )
    }
}

export default NavBar;