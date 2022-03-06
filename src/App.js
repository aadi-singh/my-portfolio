import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import NavBar from './components/Navbar';
import About1 from './components/About_1';
import Product from './components/Product';
import Contact from './components/contact';
import Footer from './components/footer';
import img1 from "./assets/p1.gif";
import img2 from "./assets/p2.jpg";
import img3 from "./assets/p3.JPG";
import img4 from "./assets/p4.png";
import img5 from "./assets/p5.jpg";
import img6 from "./assets/p6.jpg";


const App=()=> {
const artWork = [{num:img1},{num:img2},{num:img3},{num:img4},{num:img5},{num:img6}];
  
    return (
      <React.Fragment>
        <NavBar />
        
        <About />
        <About1 />
        <Product  artWork={artWork}/>
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }




export default App;