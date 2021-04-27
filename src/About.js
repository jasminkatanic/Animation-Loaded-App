import Navbar from "./Navbar";
import Mobnav from "./MobNav";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";


const About = () => { 
  

  let checkPostion = parseFloat(localStorage.getItem('about'));  
  

  if(document.readyState === "complete"){   
    
      if(checkPostion===1){
        setTimeout(()=> {animateNavigation()},200);              
      }else{       
        setTimeout(()=> {stayVisible()},10);
      }
  }else{
    setTimeout(()=> {stayVisible()},10);
  }
  
   
  function animateNavigation(){
    document.getElementById("dev-img").style.animation = "zoomUpAbout 2s 3s";
    document.getElementById("dev-img").style.animationFillMode = "both";
    document.getElementById("left-cont-text").style.animation = "zoomUpAbout 2s 3s";
    document.getElementById("left-cont-text").style.animationFillMode = "both";
    document.getElementById("left-cont-about").style.animation = "slowShow 2s 3s";
    document.getElementById("left-cont-about").style.animationFillMode = "both";
    document.getElementById("right-cont-about").style.animation = "slowShow 2s 3s";
    document.getElementById("right-cont-about").style.animationFillMode = "both";
    document.getElementById("in-icon-about").style.animation = "zoomUpAbout 2s 4.5s";
    document.getElementById("in-icon-about").style.animationFillMode = "both";
    document.getElementById("insta-icon-about").style.animation = "zoomUpAbout 2s 4.5s";
    document.getElementById("insta-icon-about").style.animationFillMode = "both";
    document.getElementById("face-icon-about").style.animation = "zoomUpAbout 2s 5s";
    document.getElementById("face-icon-about").style.animationFillMode = "both";
    document.getElementById("git-icon-about").style.animation = "zoomUpAbout 2s 5s";
    document.getElementById("git-icon-about").style.animationFillMode = "both";
    document.getElementById("about-heading").style.animation = "zoomUpAbout 2s 5.8s";
    document.getElementById("about-heading").style.animationFillMode = "both";   
    
    document.getElementById("footicon").style.animation = "loadFooter 1s 4s";
    document.getElementById("footicon").style.animationFillMode = "both";

    localStorage.setItem('about',0);   
    setTimeout(()=> {disableLoader()},7500); 
  };

  function disableLoader(){
    document.getElementById("spin-load").style.animation = "defaultInVisibleState 1s 0s";
    document.getElementById("spin-load").style.animationFillMode = "both";
    document.getElementById("about-cont-second").style.zIndex = "1000";
  };  

  function stayVisible() {    
    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
    setTimeout(()=> {disableLoader()},10);
  };

  
  return ( 
    <div className="about">
      <div className="about-cont">
        <div className="about-cont-first" id="about-cont-first">
          <div className="navBar">
            <Navbar /> 
            <span className="navBar-line" id="navBar-line"></span>                              
          </div>
          <div className="about-cont-first-cont">
            <div className="about-cont-first-cont-left">
              <div className="about-cont-first-cont-left-cont" id="left-cont-about">
                <h2 className="about-cont-first-cont-left-cont-heading" id="about-heading">much better</h2>
                  <div className="about-cont-first-cont-left-cont-text" id="left-cont-text">
                    <h2 className="about-cont-first-cont-left-cont-text-secondheding">Hi there,</h2>
                      <div className="about-cont-first-cont-left-cont-text-abouttxt">
                        <p className="about-cont-first-cont-left-cont-text-abouttxt-txt">
                        My name is Jasmin Katanic, I am an IT engineer from Bosnia and Herzegovina. I am a motivated engineer who likes to create things and solve problems.
                        <br /><br />For the past 6 years I have been working in Salt Mine Tuzla as a Network and System engineer, I have worked on many interesting projects regarding industrial automation, communication, administrative automation etc.
                        <br /><br />But my real passion was always software creation and deployment, if you think I might be a good fit for you or your company then contact me and let’s make some interesting stuff.
                        </p>
                        <button className="about-cont-first-cont-left-cont-text-abouttxt-btncontact">Contact</button>
                        <p className="about-cont-first-cont-left-cont-text-abouttxt-endtxt">
                        P.S. Thank you for taking a moment from your busy  schedule to look at my website. have a nice and wonderful day.
                        </p>
                      </div>                      
                  </div>                  
              </div>
            </div>
            <div className="about-cont-first-cont-right">
                <div className="about-cont-first-cont-right-cont" id="right-cont-about">
                  <div className="about-cont-first-cont-right-cont-figure">
                    <figure className="about-cont-first-cont-right-cont-figure-cont">
                      <img src="" alt="jasmin.katanic-developer" id="dev-img"></img>
                    </figure>
                  </div>
                </div>
            </div>
            <div className="about-cont-first-cont-foot">
              <div className="about-cont-first-cont-foot-icon" id="footicon">
              <a href="" target="_blank"><FaLinkedin className="about-cont-first-cont-foot-icon-in" id="in-icon-about"></FaLinkedin></a>
              <a href="" target="_blank"><FaFacebookSquare className="about-cont-first-cont-foot-icon-fa" id="face-icon-about"/></a>
              <a href="" target="_blank"><FaGithubSquare className="about-cont-first-cont-foot-icon-git" id="git-icon-about"/></a>
              <a href="" target="_blank"><FaInstagram className="about-cont-first-cont-foot-icon-insta" id="insta-icon-about"/></a>
              </div>              
          </div>             
          </div>                                
        </div>
        <div className="navBarMob">
              <Mobnav />  
        </div>            
        <div className="about-cont-second" id="about-cont-second">
          <div className="about-cont-second-cont">
            <div className="about-cont-second-cont-spinner" id="spin-load">
              <div></div>
              <div></div>
            </div>
              <div className="about-cont-second-cont-wrapper">
                <div className="about-cont-second-cont-wrapper-typing">
                  Cleaning Up
                </div>
              </div>
          </div>          
        </div>      
      </div>
    </div>
  );
   
}


export default About;

