import React, { useState, useRef, useEffect } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import LogoBar from "./Components/LogoBar";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const layoutRef = useRef();

  const handleImageClick = (event) => {
    const clickedImage = event.currentTarget;
    setPopupImageSrc(clickedImage.src);
    setIsPopupVisible(true);
  };

  useEffect(() => {
    let handler = (e) => {
      if (layoutRef.current && layoutRef.current.contains(e.target)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  

  return (
    <div className="App">
      <Navbar />
      {isPopupVisible && (
        <>
          <div id='overlay' className='overlay'></div>
          <div className='layoutref' ref={layoutRef}>
            <div id="main-layout" className="layout" >
              <div className="main-prj">
                <img src={popupImageSrc} alt="" />
                <p><b>A Cursor Chameleon</b><br /><br />This project started as a playful experiment to push the boundaries of cursor interaction.  We all know the trusty cursor – a steadfast guide in the digital world. But what if it could become more than just a pointer?  Design Dance is an exploration of dynamic cursor design, where the cursor itself transforms based on your mouse movements.<br /><br />Imagine hovering over an image and seeing your cursor morph into a paintbrush, inviting you to explore.  Click on a button, and watch it pirouette into a playful hand.  Design Dance brings a touch of whimsy to everyday web interactions, using basic HTML, CSS, and JavaScript to create an engaging user experience.<br /><br />This project wasn't just about aesthetics – it was a chance to delve into the power of CSS animations and explore how seemingly simple interactions can breathe life into a website.  Design Dance is a testament to the transformative power of frontend development, proving that even with basic tools, you can craft experiences that surprise and delight.</p>
              </div>
              <div className="bottom-prj">
                <div className="text">
                  <b>Project title</b>
                  <p>HTML, CSS, JS</p>
                </div>
                <i>Inspired by Hyperplexed</i>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="gallery-section">
        <h2>Latest work</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img1.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img2.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img3.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img4.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img5.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
          <div className="gallery-item">
            <img alt="" onClick={handleImageClick} src="./image/img6.png" />
            <p>Project title</p>
            <p>UI, Art drection</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
