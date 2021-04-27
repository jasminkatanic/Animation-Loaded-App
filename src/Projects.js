import Navbar from "./Navbar";
import Mobnav from "./MobNav";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram, FaGlobe, FaGithub, FaSmileBeam } from "react-icons/fa";




const Projects = () => {

  setTimeout(()=> {footSetUp()},10);

  function footSetUp(){
    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
  };

  function reactToGitClick(){
    document.getElementById("about-cont-four").style.animation = "zoomInGitMeg 1s";
    document.getElementById("about-cont-four").style.animationFillMode = "both";
  };

  function closeGitMsg(){
    document.getElementById("about-cont-four").style.animation = "takeOutGitMeg 1s";
    document.getElementById("about-cont-four").style.animationFillMode = "both";
  };

  return (  
    <div className="about">
      <div className="about-cont">
        <div className="about-cont-first" id="about-cont-first">
          <div className="navBar">
              <Navbar /> 
              <span className="navBar-line" id="navBar-line"></span>                              
          </div>
          <div className="about-cont-first-work">
            <div className="about-cont-first-work-project">
              <div className="about-cont-first-work-project-cont">
                <ul className="about-cont-first-work-project-cont-listcont" id="listcontwork">
                      <div className="about-cont-first-work-project-cont-listcont-front">Projects</div>                    
                </ul>
                <ul className="about-cont-first-work-project-cont-listcont-head-lower">
                  <li className="about-cont-first-work-project-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-img">
                          <img src="" alt="Razgovaraj.ba thumnail load image"/>
                      </div>
                      <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt">
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-head">
                          <p>Subscription Website</p>
                        </div>
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-content">
                          <p>Website built for a renowned psychotherapist, website uses direct carrier billing for subscription charging. Because this was one of the early projects website was build using Vanilla JS.</p>
                        </div>
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social">
                          <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web">
                          <a href="" target="_blank" className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont">
                            <FaGlobe className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont-icon" id="web-icon-about"></FaGlobe>
                            <p className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont-txt">Website</p>
                          </a>
                          </div>
                          <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git"  id="git-icon-proj">
                            <a className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont" onClick={reactToGitClick}>
                              <FaGithub className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont-icon"></FaGithub>
                              <p className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont-txt">GitHub</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="about-cont-first-work-project-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-img">
                          <img src="" alt="Razgovaraj.ba thumnail load image"/>
                      </div>
                      <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt">
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-head">
                          <p>Subscription Website</p>
                        </div>
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-content">
                          <p>Website built for a renowned psychotherapist, website uses direct carrier billing for subscription charging. Because this was one of the early projects website was build using Vanilla JS.</p>
                        </div>
                        <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social">
                          <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web">
                          <a href="" target="_blank" className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont">
                            <FaGlobe className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont-icon" id="web-icon-about"></FaGlobe>
                            <p className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-web-cont-txt">Website</p>
                          </a>
                          </div>
                          <div className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git"  id="git-icon-proj">
                            <a className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont" onClick={reactToGitClick}>
                              <FaGithub className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont-icon"></FaGithub>
                              <p className="about-cont-first-work-project-cont-listcont-head-lower-item-contain-txt-social-git-cont-txt">GitHub</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>                  
                </ul>
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
        </div> 
        <div className="about-cont-four" id="about-cont-four">
          <div className="about-cont-four-cont">
            <div className="about-cont-four-cont-close">
                <div className="about-cont-four-cont-close-item" onClick={closeGitMsg}>&times;</div>
            </div>
            <div className="about-cont-four-cont-head">
              <div className="about-cont-four-cont-head-main">Hi there,</div>              
            </div>
            <div className="about-cont-four-cont-txt">
              <p>This project is still up and running. In order to protect my clients website and their data  I can't share a Repository of this project at this time but feel free to check out the website, if you are interested in my code than please take a look at my other project and their appropriate Repositories.</p>
              <p>Thank you for the understanding and have a nice day.</p>
              <p><FaSmileBeam></FaSmileBeam></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;