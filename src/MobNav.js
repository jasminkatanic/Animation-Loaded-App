import { Link } from "react-router-dom";


const Mobnav = () => {

  let checkPostion = parseFloat(localStorage.getItem('position'));  
  

  if(document.readyState === "complete"){   
    
      if(checkPostion===1){
        setTimeout(()=> {animateNavigation()},100);              
      }else{       
        setTimeout(()=> {animateNavigationStatic()},100); 
      }
  }else{
    setTimeout(()=> {animateNavigationStatic()},100); 
  }

  function animateNavigation(){
    document.getElementById("nav-btn").style.animation = "animateMobNav 1s 4s"
    document.getElementById("nav-btn").style.animationFillMode = "both";    
    localStorage.setItem('position',0);    
  };

  function animateNavigationStatic(){
    document.getElementById("nav-btn").style.animation = "defaultVisibleState 1s"
    document.getElementById("nav-btn").style.animationFillMode = "both";          
  };

  
  function checkState(){
    let mobNav = document.getElementById("navi-togle");
      if(mobNav.checked){
        document.getElementById("about-cont-second").style.animation ="loadMobNavBg 1s";
        document.getElementById("about-cont-second").style.animationFillMode = "both";
        document.getElementById("nav-btn").style.zIndex = "10000";
        document.getElementById("mobNavList").style.opacity = "1";
        document.getElementById("about-cont-second").style.zIndex = "1000";
        document.getElementById("about-cont-second").style.height = "500vh";
        
        
      }else{
        document.getElementById("mobNavList").style.opacity = "0";
        document.getElementById("about-cont-second").style.animation ="loadMobNavBgBack 1s";
        document.getElementById("about-cont-second").style.height = "100vh";
      }
  };
  
  return (  
    <div className="navigation" id="main-nav">
      <input type="checkbox" className="navigation__checkbox" id="navi-togle" onClick={checkState}/>
        <label htmlFor="navi-togle" className="navigation__button" id="nav-btn">
            <span className="navigation__icon">&nbsp;</span>
        </label>        
      <nav className="navigation__nav">
        <ul className="navigation__list" id="mobNavList">
          <li className="navigation__item"><Link className="navigation__link" to="/">Home</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/about">About</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/education">Education</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/work">Work</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/projects">Projects</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/contact">Contact</Link></li>
        </ul>
      </nav>              
     </div>  

  );
  
}
 
export default Mobnav;