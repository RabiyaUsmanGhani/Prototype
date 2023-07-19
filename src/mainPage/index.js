import React from "react";
import "./style.scss";
import webImage from "../assets/web-image.png";
import polygon from "../assets/Polygon.png";
import heart from "../assets/Heart.png";
import figma from "../assets/Figma.png";
import icons from "../assets/icons.png";

export function MainPage() {
  return (
    <div className="container-fluid ">
      <div className="row main-div">
        <div className="col-md-6  image-div">
          <img src={webImage} alt="webPicture" className="web-img" />
        </div>
        <div className="col-md-6  content-main-div">
          <div className="content-div">
            <h1 className="heading">
              Prototype <img src={polygon} alt="polygon" className="polygon" /> <br/>
              Landing Page
            </h1>

            <div className="logos-main-div">
              <div className="logo1-main-div">
                <div className="logo1-div">
                  <div className="icons-div">
                    <img src={heart} alt="heart" className="heart-icon" />
                    <img src={figma} alt="figma" className="figma-icon" />
                  </div>
                  <span className="logo1-text">Douala</span>
                </div>
              </div>

              <div className="logo2-main-div">
                <div className="logo2-div">
                  <div className="icons-div">
                    <div className="icons-bg">
                      <img src={icons} alt="icons" className="icons" />
                    </div>
                  </div>
                  <div className="text-div">
                    <h3>
                      Emani <br />
                      .UI
                    </h3>
                    <p>Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
