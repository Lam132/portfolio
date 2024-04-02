import React, { useState } from "react";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <footer>
        <div className="footer">
        <h2>Lets work together</h2>
        <div className="footer-components">
          <div className="left-side-footer">
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className="icon-footer">
              <a href=""><img alt="" src="./image/discord.png"/></a>
              <a href=""><img alt="" src="./image/facebook.png"/></a>
              <a href=""><img alt="" src="./image/dribbble.png"/></a>
              <a href=""><img alt="" src="./image/nstagram.png"/></a>
              <a href=""><img alt="" src="./image/behance.png"/></a>
            </div>
          </div>
          <div className="right-side-footer">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Submit</button>
          </div>
        </div>
        </div>
      </footer>
    )
}

export default Footer;
