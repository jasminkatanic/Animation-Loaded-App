import { Link } from "react-router-dom";


const Navbar = () => {
  
  let checkPostion = parseFloat(localStorage.getItem('position'));  
  

  if(document.readyState === "complete"){   
    
      if(checkPostion===1){
        setTimeout(()=> {animateNavigation()},200);              
      }else{       
        
      }
  }else{
    
  }
  
   
  function animateNavigation(){
    document.getElementById("navBar-line").style.animation = "loadNavLine 2s 3s"
    document.getElementById("navBar-line").style.animationFillMode = "both";
    document.getElementById("mainNavHome").style.animation = "navElAnima 1s 4.4s"
    document.getElementById("mainNavHome").style.animationFillMode = "both";
    document.getElementById("mainNavAbout").style.animation = "navElAnima 1s 4.9s"
    document.getElementById("mainNavAbout").style.animationFillMode = "both";
    document.getElementById("mainNavEdu").style.animation = "navElAnima 1s 5.4s";
    document.getElementById("mainNavEdu").style.animationFillMode = "both";
    document.getElementById("mainNavWork").style.animation = "navElAnima 1s 5.4s";
    document.getElementById("mainNavWork").style.animationFillMode = "both";
    document.getElementById("mainNavProjects").style.animation = "navElAnima 1s 4.9s";
    document.getElementById("mainNavProjects").style.animationFillMode = "both";
    document.getElementById("mainNavContact").style.animation = "navElAnima 1s 4.4s";
    document.getElementById("mainNavContact").style.animationFillMode = "both";
    localStorage.setItem('position',0);    
  };

  


  return ( 
    <div className="navBar-links">
      <Link to="/" id="mainNavHome">Home</Link>
      <Link to="/about" id="mainNavAbout">About</Link>
      <Link to="/education" id="mainNavEdu">Education</Link>
      <Link to="/work" id="mainNavWork">Work</Link>
      <Link to="/projects" id="mainNavProjects">Projects</Link>    
      <Link to="/contact" id="mainNavContact">Contact</Link>   
    </div>
  );

}
 
export default Navbar;