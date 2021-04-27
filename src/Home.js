import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



const Home = () => {
  
  const history = useHistory();
  
  const handleLookMore = () =>{

    document.getElementById("head-primary").style.animation = "bringDownName 1s, glowEffect 1s ease-in-out infinite alternate";
    document.getElementById("head-btn").style.animation = "takeOutBtn 1s, glowBox 1s 2.3s infinite";
    document.getElementById("head-line").style.animationName = "lineRemove";
    document.getElementById("head-line").style.animationDelay = "1.2s";
    localStorage.setItem('position',1);    
    setTimeout(()=> {history.push('/about');},3000); 
    setTimeout(()=> {blureAbout()},3000); 
    setTimeout(()=> {setInitNavanima()},3000); 
    localStorage.setItem('about',1); 
    localStorage.setItem('edu',1); 
    

  };

  function setInitNavanima(){
    document.getElementById("navBar-line").style.animation = "defaultInVisibleState 0s"
    document.getElementById("navBar-line").style.animationFillMode = "both";
    document.getElementById("mainNavHome").style.animation = "defaultInVisibleState 0s"
    document.getElementById("mainNavHome").style.animationFillMode = "both";
    document.getElementById("mainNavAbout").style.animation = "defaultInVisibleState 0s"
    document.getElementById("mainNavAbout").style.animationFillMode = "both";
    document.getElementById("mainNavEdu").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainNavEdu").style.animationFillMode = "both";
    document.getElementById("mainNavWork").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainNavWork").style.animationFillMode = "both";
    document.getElementById("mainNavProjects").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainNavProjects").style.animationFillMode = "both";
    document.getElementById("mainNavContact").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainNavContact").style.animationFillMode = "both";
    document.getElementById("dev-img").style.animation = "defaultInVisibleState 0s";
    document.getElementById("dev-img").style.animationFillMode = "both";    
    document.getElementById("left-cont-text").style.animation = "defaultInVisibleState 0s";
    document.getElementById("left-cont-text").style.animationFillMode = "both";
    document.getElementById("left-cont-about").style.animation = "defaultInVisibleState 0s";
    document.getElementById("left-cont-about").style.animationFillMode = "both";
    document.getElementById("right-cont-about").style.animation = "defaultInVisibleState 0s";
    document.getElementById("right-cont-about").style.animationFillMode = "both";
    document.getElementById("in-icon-about").style.animation = "defaultInVisibleState 0s";
    document.getElementById("in-icon-about").style.animationFillMode = "both";
    document.getElementById("insta-icon-about").style.animation = "defaultInVisibleState 0s";
    document.getElementById("insta-icon-about").style.animationFillMode = "both";
    document.getElementById("git-icon-about").style.animation = "defaultInVisibleState 0s";
    document.getElementById("git-icon-about").style.animationFillMode = "both";
    document.getElementById("about-heading").style.animation = "defaultInVisibleState 0s";
    document.getElementById("about-heading").style.animationFillMode = "both";    
  }
  
  function blureAbout(){
    document.getElementById("about-cont-second").style.animation = "focusBackGround 6s 2s";
    document.getElementById("about-cont-second").style.animationFillMode = "both";  
    
  };
  
  return (     
    <div className="home">
      <div className="home-cont">
        <div className="home-cont-heading" id="head">
          <span className="home-cont-heading-primary" id="head-primary">Jasmin Katanic</span>
          <span className="home-cont-heading-line" id="head-line"></span>
          <button className="home-cont-heading-btn" onClick={handleLookMore} id="head-btn">Take a Better Look</button>          
        </div>
      </div>      
    </div>     
  );

}
 
export default Home;