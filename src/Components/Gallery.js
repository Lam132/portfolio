import React, { useState } from "react";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Latest work</h2>
      <div className="gallery-container">
        <div className="gallery-item">
          <img alt="" src="./image/img1.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
        <div className="gallery-item">
          <img alt="" src="./image/img2.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
        <div className="gallery-item">
          <img alt="" src="./image/img3.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
        <div className="gallery-item">
          <img alt="" src="./image/img4.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
        <div className="gallery-item">
          <img alt="" src="./image/img5.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
        <div className="gallery-item">
          <img alt="" src="./image/img6.png" />
          <p>Project title</p>
          <p>UI, Art drection</p>
        </div>
      </div>
    </div>
  )

}

export default Gallery;