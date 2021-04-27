import Navbar from "./Navbar";
import Mobnav from "./MobNav";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

const Education = () => {
  
  let checkPostion = parseFloat(localStorage.getItem('edu'));  
  

  if(document.readyState === "complete"){   
    
      if(checkPostion===1){        
        setTimeout(()=> {hideSection()},10);        
        setTimeout(()=> {listAnime()},2200);  
                    
      }else{       
        setTimeout(()=> {stayVisible()},10);  
      }
  }else{
    setTimeout(()=> {stayVisible()},10); 
  }

  function listAnime(){
    document.getElementById("listcont").style.borderRight = "hidden";    
    document.getElementById("listcontother").style.borderRight = "hidden";
    document.getElementById("listcontright").style.borderRight = "hidden";     
    
    
    document.getElementById("masterEl").style.animation = "rolldown .7s .3s";
    document.getElementById("masterEl").style.transformOrigin = "50% 0";
    document.getElementById("masterEl").style.animationFillMode = "forwards";

    document.getElementById("bachelorEl").style.animation = "rolldown .7s 1s";
    document.getElementById("bachelorEl").style.transformOrigin = "50% 0";
    document.getElementById("bachelorEl").style.animationFillMode = "forwards";

    setTimeout(()=> {holdOffAnime()},10);

    document.getElementById("jscourse").style.animation = "rolldown .7s 2.9s";
    document.getElementById("jscourse").style.transformOrigin = "50% 0";
    document.getElementById("jscourse").style.animationFillMode = "forwards";

    document.getElementById("advancedcss").style.animation = "rolldown .7s 3.6s";
    document.getElementById("advancedcss").style.transformOrigin = "50% 0";
    document.getElementById("advancedcss").style.animationFillMode = "forwards";

    document.getElementById("hmlcss").style.animation = "rolldown .7s 4.3s";
    document.getElementById("hmlcss").style.transformOrigin = "50% 0";
    document.getElementById("hmlcss").style.animationFillMode = "forwards";

    document.getElementById("ccnafirst").style.animation = "rolldown .7s 5s";
    document.getElementById("ccnafirst").style.transformOrigin = "50% 0";
    document.getElementById("ccnafirst").style.animationFillMode = "forwards";

    document.getElementById("ccnasecond").style.animation = "rolldown .7s 5.7s";
    document.getElementById("ccnasecond").style.transformOrigin = "50% 0";
    document.getElementById("ccnasecond").style.animationFillMode = "forwards";

    document.getElementById("echo").style.animation = "rolldown .7s 8.2s";
    document.getElementById("echo").style.transformOrigin = "50% 0";
    document.getElementById("echo").style.animationFillMode = "forwards";

    document.getElementById("termo").style.animation = "rolldown .7s 8.9s";
    document.getElementById("termo").style.transformOrigin = "50% 0";
    document.getElementById("termo").style.animationFillMode = "forwards";

    document.getElementById("gamma").style.animation = "rolldown .7s 9.6s";
    document.getElementById("gamma").style.transformOrigin = "50% 0";
    document.getElementById("gamma").style.animationFillMode = "forwards";

    document.getElementById("caliper").style.animation = "rolldown .7s 10.3s";
    document.getElementById("caliper").style.transformOrigin = "50% 0";
    document.getElementById("caliper").style.animationFillMode = "forwards";

    document.getElementById("seis").style.animation = "rolldown .7s 11s";
    document.getElementById("seis").style.transformOrigin = "50% 0";
    document.getElementById("seis").style.animationFillMode = "forwards";

    
  };

  //Call this fonction when previous animation finishes
  function holdOffAnime(){   
    document.getElementById("listcontright").style.borderRight = "visible"; 
    document.getElementById("listcontright").style.animation = "typing 2s steps(21) 1.3s, blink .5s infinite alternate";
    document.getElementById("listcontright").style.animationFillMode = "both";
    localStorage.setItem('edu',0); 

    document.getElementById("listcontother").style.borderRight = "visible"; 
    document.getElementById("listcontother").style.animation = "typing 2s steps(21) 5s, blink .5s infinite alternate";
    document.getElementById("listcontother").style.animationFillMode = "both";

    document.getElementById("otherinfocer").style.animation = "navElAnima 1s 7s";
    document.getElementById("otherinfocer").style.animationFillMode = "both";   
    
    
  };
  

  function hideSection(){
    document.getElementById("listcontright").style.animation = "defaultInVisibleState 0s";
    document.getElementById("listcontright").style.animationFillMode = "both";
    document.getElementById("listcontother").style.animation = "defaultInVisibleState 0s";
    document.getElementById("listcontother").style.animationFillMode = "both";
    document.getElementById("otherinfocer").style.animation = "defaultInVisibleState 0s";
    document.getElementById("otherinfocer").style.animationFillMode = "both";   
    
    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
  }

  function stayVisible() {
    document.getElementById("listcont").style.borderRight = "hidden";
    document.getElementById("listcont").style.animation = "defaultVisibleState 0s";
    document.getElementById("listcont").style.animationFillMode = "both";
    document.getElementById("listcontright").style.borderRight = "hidden";
    document.getElementById("listcontright").style.animation = "defaultVisibleState 0s";
    document.getElementById("listcontright").style.animationFillMode = "both";
    document.getElementById("listcontother").style.borderRight = "hidden";
    document.getElementById("listcontother").style.animation = "defaultVisibleState 0s";
    document.getElementById("listcontother").style.animationFillMode = "both"; 
    document.getElementById("masterEl").style.animation = "defaultVisibleState 0s";
    document.getElementById("masterEl").style.animationFillMode = "both";   
    document.getElementById("bachelorEl").style.animation = "defaultVisibleState 0s";
    document.getElementById("bachelorEl").style.animationFillMode = "both"; 
    document.getElementById("jscourse").style.animation = "defaultVisibleState 0s";
    document.getElementById("jscourse").style.animationFillMode = "both";
    document.getElementById("advancedcss").style.animation = "defaultVisibleState 0s";
    document.getElementById("advancedcss").style.animationFillMode = "both";
    document.getElementById("hmlcss").style.animation = "defaultVisibleState 0s";
    document.getElementById("hmlcss").style.animationFillMode = "both";
    document.getElementById("ccnafirst").style.animation = "defaultVisibleState 0s";
    document.getElementById("ccnafirst").style.animationFillMode = "both";
    document.getElementById("ccnasecond").style.animation = "defaultVisibleState 0s";
    document.getElementById("ccnasecond").style.animationFillMode = "both";
    document.getElementById("otherinfocer").style.animation = "defaultVisibleState 0s";
    document.getElementById("otherinfocer").style.animationFillMode = "both";
    document.getElementById("echo").style.animation = "defaultVisibleState 0s";
    document.getElementById("echo").style.animationFillMode = "both";
    document.getElementById("termo").style.animation = "defaultVisibleState 0s";
    document.getElementById("termo").style.animationFillMode = "both";
    document.getElementById("gamma").style.animation = "defaultVisibleState 0s";
    document.getElementById("gamma").style.animationFillMode = "both";
    document.getElementById("caliper").style.animation = "defaultVisibleState 0s";
    document.getElementById("caliper").style.animationFillMode = "both";
    document.getElementById("seis").style.animation = "defaultVisibleState 0s";
    document.getElementById("seis").style.animationFillMode = "both";

    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
    
  };
  

  return (  
    <div className="about">
      <div className="about-cont">
        <div className="about-cont-first" id="about-cont-first">
          <div className="navBar">
            <Navbar /> 
            <span className="navBar-line" id="navBar-line"></span>                              
          </div>   
          <div className="about-cont-first-edu">
            <div className="about-cont-first-edu-left">
              <div className="about-cont-first-edu-left-cont">
                  <ul className="about-cont-first-edu-left-cont-listcont" id="listcont">
                    Higher Education
                  </ul>                  
                  <ul className="about-cont-first-edu-left-cont-listcont-head-lower">
                    <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="masterEl">
                      <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                          <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">Master's Degree</p>
                        </div>
                          <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">International Burch University</p>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Duration: 2017 - 2020</p>
                      </div>
                    </li>
                    <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="bachelorEl">
                      <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                          <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">Bachelor's Degree</p>
                        </div>
                          <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">International Burch University</p>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Duration: 2011 - 2015</p>
                      </div>
                    </li>
                  </ul> 
                  <ul className="about-cont-first-edu-left-cont-listcont" id="listcontright">
                      Certificats
                    </ul>                  
                    <ul className="about-cont-first-edu-left-cont-listcont-head-lower">
                      <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="jscourse">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">JavaScript Course</p>
                          </div>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">Udemy</p>
                              <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Completion: 2020</p>
                        </div>
                      </li>
                      <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="advancedcss">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">Advanced CSS and Sass</p>
                          </div>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">Udemy</p>
                              <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Completion: 2020</p>
                        </div>
                      </li>
                      <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="hmlcss">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">HTML5 and CSS3</p>
                          </div>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">Udemy</p>
                              <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Completion: 2020</p>
                        </div>
                      </li>
                      <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="ccnafirst">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">Routing and Switching</p>
                          </div>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">Cisco Networking Academy</p>
                              <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Completion: 2018</p>
                        </div>
                      </li>
                      <li className="about-cont-first-edu-left-cont-listcont-head-lower-item" id="ccnasecond">
                        <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-degree-text">Exploration</p>
                          </div>
                            <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-inst">Cisco Networking Academy</p>
                              <p className="about-cont-first-edu-left-cont-listcont-head-lower-item-data-period">Completion: 2013</p>
                        </div>
                      </li>
                  </ul>                                               
              </div>
            </div>
            <div className="about-cont-first-edu-right">
              <div className="about-cont-first-edu-right-cont">
                <ul className="about-cont-first-edu-right-cont-listcont" id="listcontother">
                      Other Certifications
                </ul>
                <ul className="about-cont-first-edu-right-cont-listcont-head-lower">
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-dataend">                        
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-dataend-info" id="otherinfocer">Apart from IT certifications and education, over the years I have acquired other technical knowledge.</p>                            
                        </div>
                      </li>
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item" id="echo">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree-text">Echolocation Equipment</p>
                          </div>
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-inst">CHEMKOP Institute, Poland</p>
                              <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-period">Completion: 2016</p>
                        </div>
                      </li>    
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item" id="termo">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree-text">Termolog Equipment</p>
                          </div>
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-inst">CHEMKOP Institute, Poland</p>
                              <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-period">Completion: 2016</p>
                        </div>
                      </li>    
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item" id="gamma">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree-text">Gamma Ray Equipment</p>
                          </div>
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-inst">CHEMKOP Institute, Poland</p>
                              <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-period">Completion: 2016</p>
                        </div>
                      </li> 
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item" id="caliper">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree-text">Caliper Log Usage</p>
                          </div>
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-inst">CHEMKOP Institute, Poland</p>
                              <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-period">Completion: 2016</p>
                        </div>
                      </li>  
                      <li className="about-cont-first-edu-right-cont-listcont-head-lower-item" id="seis">
                        <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data">
                          <div className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree">
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-degree-text">Seismic Equipment</p>
                          </div>
                            <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-inst">CTU-IPKIN</p>
                              <p className="about-cont-first-edu-right-cont-listcont-head-lower-item-data-period">Completion: 2016</p>
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
      </div>  
      </div>  

  );


}
 
export default Education;