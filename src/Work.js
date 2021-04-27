import Navbar from "./Navbar";
import Mobnav from "./MobNav";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import {Chart} from 'react-chartjs-2';
import { useState, useEffect } from 'react';


const Work = () => {

  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [period, setPeriod] = useState('');
  const [companytwo, setCompanytwo] = useState('');
  const [locationtwo, setLocationtwo] = useState('');
  const [periodtwo, setPeriodtwo] = useState('');
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');  
  const [nine, setNine] = useState(''); 
  const [ten, setTen] = useState(''); 
  const [eleven, setEleven] = useState(''); 
  const [twelve, setTwelve] = useState(''); 

  window.onresize = animateFreeBox;

  setTimeout(()=> {footSetUp()},10); 
  setTimeout(()=> {animateFreeBox()},10); 


  

  function fullTimeState(){
    setCompany("Salt Mine Tuzla");
    setLocation("Tuzla, Bosnia and Herzegovina");
    setPeriod("2016 - Present");
    setOne("Trained and worked with two technicians and successfully built company's IT infrastructure from scratch. New network enabled file sharing, printing and VoIP for 120 users and devices");
    setTwo("Built a wireless network for seismological devices covering area of approximately 10 square kilometers or 3.9 square miles. For the past five years network uptime has remained 99.999% regardless of weather conditions");
    setThree("Worked with an engineering team on automating portion of the production process");
    setFour("As a lead IT engineer, designed a network for production process and with a team of technicians implemented the same design, network covers 40 kilometers or 25 miles of fiber optic network along the pipelines");
    setFive("Built a simplified SCADA interface for the employees using vanilla JavaScript");
    setSix("Worked with Echolocation equipment and preformed echolocation measurements");
    setSeven("Installed measuring and controlling equipment in three pumping stations, built frontend interface to interact with industrial backend");
    setEight("Installed and configured windows servers, SCADA system, Cisco equipment and custom built interfaces using vanilla JS");
    let ulEl = document.getElementById("mainListPoints").childNodes[7];
    ulEl.style.opacity = "1";
    ulEl.style.visibility  = "visible";    

    document.getElementById("about-cont-third").style.height = "500vh";

    setTimeout(()=> {handleBoxClick(0)},10); 
  };

  function freelanceState(){
    setCompany("Freelance Work");
    setLocation("Worldwide");
    setPeriod("2013 - 2021");
    setOne("Developed and deployed a website using Vanilla JS, which included user registration and subscription service using Direct Carrier Billing");
    setTwo("Developed number of personal and business Websites using React, some of which are still up and running today; see some of them in projects section");
    setThree("Migrated websites in between different hosting providers");
    setFour("Wrote server side scripts, group policies, Cisco scripts instruction guides as well as technical documentation");
    setFive("Did projects related to data scraping, cleaning and processing");
    setSix("Remote administration and configuration of file, print, application, web and virtual servers");
    setSeven("Early on in freelance career developed, customized and deployed WordPress websites");  
    
    document.getElementById("about-cont-third").style.height = "500vh";

    setTimeout(()=> {handleBoxClick(1)},10); 
  };

  function trainState(){
    setCompany("Salt Mine Tuzla");
    setLocation("Tuzla, Bosnia and Herzegovina");
    setPeriod("2015 -2016");
    setOne("Familiarized myself with the production process, safety procedures and work environment");
    setTwo("Worked on backbone cabling of two facilities, worked with UTP, STP, coaxial and fiber optic cables, mounted server racks, wired patch panels and RJ45 sockets");
    setThree("Wrote network policies as well as up to date network maps");
    setFour("Apart from passive network elements configured and managed layer 3 devices"); 
    setNine("Familiarized myself with large networks and automation, provided tech support to employees");
    setTen("Responded to calls and provided tech support directly or via remote access");
    setEleven("Help technicians with the cabling, made straight-through, crossover and rollover cables");
    setTwelve("Connected, configured switches and assigned IP addresses, added users and assigned roles and permissions");   

    setCompanytwo("GIKIL");
    setLocationtwo("Lukavac, Bosnia and Herzegovina");
    setPeriodtwo("2013-2014");

    document.getElementById("about-cont-third").style.height = "500vh";

    setTimeout(()=> {handleBoxClick(2)},10); 
  };
  
  function handleBoxClick(location){

    if(location===0){
      hideLowerSectionThird();
      let ulElFive = document.getElementById("mainListPoints").childNodes[4];
      ulElFive.style.opacity = "1";
      ulElFive.style.visibility  = "visible";
      ulElFive.style.overflow = "visible";
      ulElFive.style.height = "auto"; 

      let ulElSix = document.getElementById("mainListPoints").childNodes[5];
      ulElSix.style.opacity = "1";
      ulElSix.style.visibility  = "visible";
      ulElSix.style.overflow = "visible";
      ulElSix.style.height = "auto"; 

      let ulElSeven = document.getElementById("mainListPoints").childNodes[6];
      ulElSeven.style.opacity = "1";
      ulElSeven.style.visibility  = "visible";
      ulElSeven.style.overflow = "visible";
      ulElSeven.style.height = "auto";

      let ulElEight = document.getElementById("mainListPoints").childNodes[7];
      ulElEight.style.opacity = "1";
      ulElEight.style.visibility  = "visible";
      ulElEight.style.overflow = "visible";
      ulElEight.style.height = "auto";

          

    }else if(location===1){
      hideLowerSectionThird();

      let ulElFour = document.getElementById("mainListPoints").childNodes[4];
      ulElFour.style.opacity = "1";
      ulElFour.style.visibility  = "visible";
      ulElFour.style.overflow = "visible";
      ulElFour.style.height = "auto"; 

      let ulElFive = document.getElementById("mainListPoints").childNodes[5];
      ulElFive.style.opacity = "1";
      ulElFive.style.visibility  = "visible";
      ulElFive.style.overflow = "visible";
      ulElFive.style.height = "auto"; 

      let ulElSix = document.getElementById("mainListPoints").childNodes[6];
      ulElSix.style.opacity = "1";
      ulElSix.style.visibility  = "visible";
      ulElSix.style.overflow = "visible";
      ulElSix.style.height = "auto"; 
      
      
      
      let ulEl = document.getElementById("mainListPoints").childNodes[7];
      ulEl.style.opacity = "0";
      ulEl.style.visibility  = "hidden";
      ulEl.style.height = "auto";

      


    }else{
      
      let ulElFive = document.getElementById("mainListPoints").childNodes[4];
      ulElFive.style.opacity = "0";
      ulElFive.style.visibility  = "hidden";
      ulElFive.style.overflow = "hidden";
      ulElFive.style.height = "0";

      let ulElSix = document.getElementById("mainListPoints").childNodes[5];
      ulElSix.style.opacity = "0";
      ulElSix.style.visibility  = "hidden";
      ulElSix.style.overflow = "hidden";
      ulElSix.style.height = "0";

      let ulElSeven = document.getElementById("mainListPoints").childNodes[6];
      ulElSeven.style.opacity = "0";
      ulElSeven.style.visibility  = "hidden";
      ulElSeven.style.overflow = "hidden";
      ulElSeven.style.height = "0";

      let ulElEight = document.getElementById("mainListPoints").childNodes[7];
      ulElEight.style.opacity = "0";
      ulElEight.style.visibility  = "hidden";
      ulElEight.style.overflow = "hidden";
      ulElEight.style.height = "0";
      

      showLowerSectionThird();
    } 



    document.getElementById("leftBoxFull").style.animation = "takeOUtLeftSide 1s";
    document.getElementById("leftBoxFull").style.animationFillMode = "both";
    document.getElementById("rightBoxFull").style.animation = "takeOUtRightSide 1s";
    document.getElementById("rightBoxFull").style.animationFillMode = "both";
    document.getElementById("topBoxFull").style.animation = "takeOUtTopSide 1s";
    document.getElementById("topBoxFull").style.animationFillMode = "both";
    document.getElementById("bottomBoxFull").style.animation = "takeOUtBottomSide 1s";
    document.getElementById("bottomBoxFull").style.animationFillMode = "both";    
    document.getElementById("frontBoxFull").style.animation = "takeOUtFrontSide 1s";
    document.getElementById("frontBoxFull").style.animationFillMode = "both";

    document.getElementById("about-cont-third").style.animation = "zoomInWorkEx 1s .2s";
    document.getElementById("about-cont-third").style.animationFillMode = "both";

    document.getElementById("workMoreHeadMain").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreHeadMain").style.animationFillMode = "both";
    document.getElementById("workMoreSubFirMain").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreSubFirMain").style.animationFillMode = "both";
    document.getElementById("workMoreSubSecMain").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreSubSecMain").style.animationFillMode = "both";

    document.getElementById("mainListFirstItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListFirstItem").style.animationFillMode = "both";
    document.getElementById("mainListSecondItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListSecondItem").style.animationFillMode = "both";
    document.getElementById("mainListThirdItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListThirdItem").style.animationFillMode = "both";
    document.getElementById("mainListFourthItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListFourthItem").style.animationFillMode = "both";
    document.getElementById("mainListFifthItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListFifthItem").style.animationFillMode = "both";
    document.getElementById("mainListSixthItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListSixthItem").style.animationFillMode = "both";
    document.getElementById("mainListSeventhItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListSeventhItem").style.animationFillMode = "both";
    document.getElementById("mainListEightItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListEightItem").style.animationFillMode = "both";


    document.getElementById("workMoreHeadMainSecond").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreHeadMainSecond").style.animationFillMode = "both";
    document.getElementById("workMoreSubFirMainSecond").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreSubFirMainSecond").style.animationFillMode = "both";
    document.getElementById("workMoreSubSecMainSecond").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("workMoreSubSecMainSecond").style.animationFillMode = "both";
    
    document.getElementById("mainListNineItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListNineItem").style.animationFillMode = "both";
    document.getElementById("mainListTenItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListTenItem").style.animationFillMode = "both";
    document.getElementById("mainListElevenItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListElevenItem").style.animationFillMode = "both";
    document.getElementById("mainListTwelveItem").style.animation = "fadeIn 1s 1.1s";
    document.getElementById("mainListTwelveItem").style.animationFillMode = "both";

    document.getElementById("mainListPoints").style.animation = "setPoints 1s 1.1s";
    document.getElementById("mainListPoints").style.animationFillMode = "both";

    document.getElementById("mainListPointsSecond").style.animation = "setPoints 1s 1.1s";
    document.getElementById("mainListPointsSecond").style.animationFillMode = "both";

    document.getElementById("about-cont-third").style.height = "100vh";

       

    setTimeout(()=> {loadWorkExDiv()},1000); 
  }

  function loadWorkExDiv() {
    document.getElementById("leftBoxFull").style.animation = "resetLeftSide 0s";
    document.getElementById("leftBoxFull").style.animationFillMode = "both";
    document.getElementById("rightBoxFull").style.animation = "resetRightSide 0s";
    document.getElementById("rightBoxFull").style.animationFillMode = "both";
    document.getElementById("topBoxFull").style.animation = "resetTopSide 0s";
    document.getElementById("topBoxFull").style.animationFillMode = "both";
    document.getElementById("bottomBoxFull").style.animation = "resetBottomSide 0s";
    document.getElementById("bottomBoxFull").style.animationFillMode = "both";    
    document.getElementById("frontBoxFull").style.animation = "resetFrontSide 0s";
    document.getElementById("frontBoxFull").style.animationFillMode = "both";
    
  }

  function workFullClose(){
    document.getElementById("about-cont-third").style.animation = "zoomOutWorkEx 1s";
    document.getElementById("about-cont-third").style.animationFillMode = "both";
    
    document.getElementById("workMoreHeadMain").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreHeadMain").style.animationFillMode = "both";
    document.getElementById("workMoreSubFirMain").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreSubFirMain").style.animationFillMode = "both";
    document.getElementById("workMoreSubSecMain").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreSubSecMain").style.animationFillMode = "both";

    document.getElementById("workMoreHeadMainSecond").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreHeadMainSecond").style.animationFillMode = "both";
    document.getElementById("workMoreSubFirMainSecond").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreSubFirMainSecond").style.animationFillMode = "both";
    document.getElementById("workMoreSubSecMainSecond").style.animation = "defaultInVisibleState 0s";
    document.getElementById("workMoreSubSecMainSecond").style.animationFillMode = "both";

    document.getElementById("mainListFirstItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListFirstItem").style.animationFillMode = "both";
    document.getElementById("mainListSecondItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListSecondItem").style.animationFillMode = "both";
    document.getElementById("mainListThirdItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListThirdItem").style.animationFillMode = "both";
    document.getElementById("mainListFourthItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListFourthItem").style.animationFillMode = "both";
    document.getElementById("mainListFifthItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListFifthItem").style.animationFillMode = "both";
    document.getElementById("mainListSixthItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListSixthItem").style.animationFillMode = "both";
    document.getElementById("mainListSeventhItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListSeventhItem").style.animationFillMode = "both";
    document.getElementById("mainListEightItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListEightItem").style.animationFillMode = "both";

    
    document.getElementById("mainListNineItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListNineItem").style.animationFillMode = "both";
    document.getElementById("mainListTenItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListTenItem").style.animationFillMode = "both";
    document.getElementById("mainListElevenItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListElevenItem").style.animationFillMode = "both";
    document.getElementById("mainListTwelveItem").style.animation = "defaultInVisibleState 0s";
    document.getElementById("mainListTwelveItem").style.animationFillMode = "both";    

    document.getElementById("mainListPoints").style.animation = "setPointsToNull 0s";
    document.getElementById("mainListPoints").style.animationFillMode = "both";

    document.getElementById("mainListPointsSecond").style.animation = "setPointsToNull 0s";
    document.getElementById("mainListPointsSecond").style.animationFillMode = "both";
    
    document.getElementById("about-cont-third").style.height = "100vh";
  };

 

  
  function footSetUp(){
    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
  }

  function animateFreeBox(){  

    let loc = window.location.pathname;
    
    let intViewportWidth = window.innerWidth;
    
    if(intViewportWidth<=1152 && loc === "/work"){
      //Full box static setup
      document.getElementById("fullBox").style.width = "300px";
      document.getElementById("fullBox").style.height = "100px";
      document.getElementById("frontBoxFull").style.width = "300px";
      document.getElementById("frontBoxFull").style.height = "100px";
      document.getElementById("frontBoxFull").style.transform = "translate3d(0, 0, 50px)";
      document.getElementById("leftBoxFull").style.width = "100px";
      document.getElementById("leftBoxFull").style.height = "100px";
      document.getElementById("leftBoxFull").style.transform = "translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, -150px)";
      document.getElementById("rightBoxFull").style.width = "100px";
      document.getElementById("rightBoxFull").style.height = "100px";
      document.getElementById("rightBoxFull").style.transform = "translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, -150px)";
      document.getElementById("backBoxFull").style.width = "300px";
      document.getElementById("backBoxFull").style.height = "100px";
      document.getElementById("backBoxFull").style.transform = "translate3d(0, 0, -50px)";
      document.getElementById("topBoxFull").style.width = "300px";
      document.getElementById("topBoxFull").style.height = "100px";
      document.getElementById("topBoxFull").style.transform = "translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, -50px)";
      document.getElementById("bottomBoxFull").style.width = "300px";
      document.getElementById("bottomBoxFull").style.height = "100px";
      document.getElementById("bottomBoxFull").style.transform = "translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, -51px)";

      //Free box static setup
      document.getElementById("freeBox").style.width = "300px";
      document.getElementById("freeBox").style.height = "100px";
      document.getElementById("frontBoxFree").style.width = "300px";
      document.getElementById("frontBoxFree").style.height = "100px";
      document.getElementById("frontBoxFree").style.transform = "translate3d(0, 0, 50px)";
      document.getElementById("leftBoxFree").style.width = "100px";
      document.getElementById("leftBoxFree").style.height = "100px";
      document.getElementById("leftBoxFree").style.transform = "translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, -150px)";
      document.getElementById("rightBoxFree").style.width = "100px";
      document.getElementById("rightBoxFree").style.height = "100px";
      document.getElementById("rightBoxFree").style.transform = "translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, -150px)";
      document.getElementById("backBoxFree").style.width = "300px";
      document.getElementById("backBoxFree").style.height = "100px";
      document.getElementById("backBoxFree").style.transform = "translate3d(0, 0, -50px)";
      document.getElementById("topBoxFree").style.width = "300px";
      document.getElementById("topBoxFree").style.height = "100px";
      document.getElementById("topBoxFree").style.transform = "translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, -50px)";
      document.getElementById("bottomBoxFree").style.width = "300px";
      document.getElementById("bottomBoxFree").style.height = "100px";
      document.getElementById("bottomBoxFree").style.transform = "translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, -51px)";

      //Train box static setup
      document.getElementById("trainBox").style.width = "300px";
      document.getElementById("trainBox").style.height = "100px";
      document.getElementById("frontBoxTrain").style.width = "300px";
      document.getElementById("frontBoxTrain").style.height = "100px";
      document.getElementById("frontBoxTrain").style.transform = "translate3d(0, 0, 50px)";
      document.getElementById("leftBoxTrain").style.width = "100px";
      document.getElementById("leftBoxTrain").style.height = "100px";
      document.getElementById("leftBoxTrain").style.transform = "translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, -150px)";
      document.getElementById("rightBoxTrain").style.width = "100px";
      document.getElementById("rightBoxTrain").style.height = "100px";
      document.getElementById("rightBoxTrain").style.transform = "translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, -150px)";
      document.getElementById("backBoxTrain").style.width = "300px";
      document.getElementById("backBoxTrain").style.height = "100px";
      document.getElementById("backBoxTrain").style.transform = "translate3d(0, 0, -50px)";
      document.getElementById("topBoxTrain").style.width = "300px";
      document.getElementById("topBoxTrain").style.height = "100px";
      document.getElementById("topBoxTrain").style.transform = "translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, -50px)";
      document.getElementById("bottomBoxTrain").style.width = "300px";
      document.getElementById("bottomBoxTrain").style.height = "100px";
      document.getElementById("bottomBoxTrain").style.transform = "translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, -51px)";
      setTimeout(()=> {moveBoxSmall()},100); 
    }else if(loc === "/work"){      
      setTimeout(()=> {moveBox()},100); 
    }   
    
    if(loc === "/work"){
      var chartRadarDOM = document.getElementById("chartRadar");
      var chartRadarData = {
        labels: ["Networking", "Automation", "Tech Support", "HTML", "CSS/SASS", "JavaScript", "React"],
        datasets: [{
          label: "Knowledge",
          backgroundColor: "rgba(149,121,209,.5)",
          borderColor: "rgba(149,121,209,.8)",
          pointBackgroundColor: "rgba(149,121,209,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(149,121,209,1)",
          pointBorderWidth: 2,
          data: [9, 8, 10, 9, 8, 8, 7]
        }]
      };

      var chartRadarOptions = {
        scale: {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6,
          },
          pointLabels: {
            fontSize: 15
          },
          gridLines: {
            color: 'rgba(149,121,209,.1)'
          },        
        },
        legend:{
          labels: {
            fontSize: 15          
          }
        }
      
      };

      var chartRadar = new Chart(chartRadarDOM, {
        type: 'radar',
        data: chartRadarData,
        options: chartRadarOptions
      });
    }
    
    
    
  };

  function moveBox(){
    document.getElementById("fullBox").style.animation = "franticBox 1.5s infinite alternate";
    
    document.getElementById("freeBox").style.animation = "analysBox 8s infinite alternate"; 
    document.getElementById("leftBoxFree").style.animation = "takeOUtLeftSideFree 2s infinite alternate"; 
    document.getElementById("topBoxFree").style.animation = "takeOUtTopSideFree 2s infinite alternate";
    document.getElementById("rightBoxFree").style.animation = "takeOUtRightSideFree 2s infinite alternate";

    document.getElementById("trainBox").style.animation = "sizingBox 5s infinite";
  };

  function moveBoxSmall(){
    document.getElementById("fullBox").style.animation = "franticBox 1.5s infinite alternate";
    
    document.getElementById("freeBox").style.animation = "analysBox 8s infinite alternate"; 
    document.getElementById("leftBoxFree").style.animation = "takeOUtLeftSideFreeSmall 2s infinite alternate"; 
    document.getElementById("topBoxFree").style.animation = "takeOUtTopSideFreeSmall 2s infinite alternate";
    document.getElementById("rightBoxFree").style.animation = "takeOUtRightSideFreeSmall 2s infinite alternate";

    document.getElementById("trainBox").style.animation = "sizingBox 5s infinite";
  };

  
  function hideLowerSectionThird(){
    let secondElHead = document.getElementById("secondSectionHead");
    secondElHead.style.visibility = "hidden";
    secondElHead.style.opacity = "0";
    secondElHead.style.height = "0";
    secondElHead.style.overflow = "hidden";

    let secondEl = document.getElementById("secondListThirdSection");
    secondEl.style.visibility = "hidden";
    secondEl.style.opacity = "0";
    secondEl.style.height = "0";
    secondEl.style.overflow = "hidden";
  };

  function showLowerSectionThird(){
    let secondElHead = document.getElementById("secondSectionHead");
    secondElHead.style.visibility = "visible";
    secondElHead.style.opacity = "1";
    secondElHead.style.height = "auto";
    secondElHead.style.overflow = "visible";

    let secondEl = document.getElementById("secondListThirdSection");
    secondEl.style.visibility = "visible";
    secondEl.style.opacity = "1";
    secondEl.style.height = "auto";
    secondEl.style.overflow = "visible";
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
            <div className="about-cont-first-work-left">
              <div className="about-cont-first-work-left-cont">
                <ul className="about-cont-first-work-left-cont-listcont" id="listcontwork">
                    <div className="about-cont-first-work-left-cont-listcont-front">Experience</div>                    
                </ul>  
                <ul className="about-cont-first-work-left-cont-listcont-head-lower">
                  <li className="about-cont-first-work-left-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box" onClick={fullTimeState} id="fullBox">
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="frontBoxFull">                          
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                            <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-main">Full-Time</p>
                              <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-sub">2015-2021</p>
                          </div>                           
                        </div>
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="backBoxFull"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="leftBoxFull"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="rightBoxFull"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="topBoxFull"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="bottomBoxFull"></div>                                                  
                      </div>
                    </div>
                  </li>
                  <li className="about-cont-first-work-left-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box" onClick={freelanceState} id="freeBox">
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="frontBoxFree">
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                            <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-main">Freelance</p>
                              <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-sub">2013-2021</p>
                          </div>                          
                        </div>
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="backBoxFree"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="leftBoxFree"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="rightBoxFree"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="topBoxFree"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="bottomBoxFree"></div>                                                  
                      </div>
                    </div>
                  </li> 
                  <li className="about-cont-first-work-left-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box" onClick={trainState} id="trainBox">
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="frontBoxTrain">
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                            <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-main">Training</p>
                              <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-sub">2012-2013</p>
                          </div>                          
                        </div>
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="backBoxTrain">
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                            <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-text">View</p> 
                          </div>                           
                        </div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="leftBoxTrain"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="rightBoxTrain"></div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="topBoxTrain">
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                              <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-text">More</p> 
                          </div>                                                   
                        </div>  
                        <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides" id="bottomBoxTrain">
                          <div className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont">
                            <p className="about-cont-first-work-left-cont-listcont-head-lower-item-contain-box-sides-cont-text">Click To</p> 
                          </div> 
                           
                        </div>                                                  
                      </div>
                    </div>
                  </li>                        
                </ul>                                                           
              </div>
            </div>
            <div className="about-cont-first-work-right">
              <div className="about-cont-first-work-right-cont">
                <ul className="about-cont-first-work-right-cont-listcont" id="listcontworkright">
                      <div className="about-cont-first-work-right-cont-listcont-front">Skills</div>                    
                </ul>
                <ul className="about-cont-first-work-right-cont-listcont-head-lower">
                  <li className="about-cont-first-work-right-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-right-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-right-cont-listcont-head-lower-item-contain-chart">
                        <canvas id="chartRadar"></canvas>
                      </div>
                    </div>
                  </li>
                  <li className="about-cont-first-work-right-cont-listcont-head-lower-item">
                    <div className="about-cont-first-work-right-cont-listcont-head-lower-item-contain">
                      <div className="about-cont-first-work-right-cont-listcont-head-lower-item-contain-download">
                        <div className="about-cont-first-work-right-cont-listcont-head-lower-item-contain-download-lbl">
                          <p>If you think I have knowledge, experience and skills which might suet you than please contact me.</p>
                        </div>                        
                          <a href="../public/Emir_Maljanovic_Cover_Letter.pdf" className="about-cont-first-work-right-cont-listcont-head-lower-item-contain-download-btn" download>My CV</a>                        
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
        <div className="about-cont-third" id="about-cont-third">
          <div className="about-cont-third-cont">
            <div className="about-cont-third-cont-close">
              <div className="about-cont-third-cont-close-item" onClick={workFullClose}>&times;</div>
            </div>
            <div className="about-cont-third-cont-head">
              <div className="about-cont-third-cont-head-main" id="workMoreHeadMain">{company}</div>
              <div className="about-cont-third-cont-head-subfir" id="workMoreSubFirMain">{location}</div>
              <div className="about-cont-third-cont-head-subsec" id="workMoreSubSecMain">{period}</div>
            </div>
            <div className="about-cont-third-cont-list">
              <ul className="about-cont-third-cont-list-cont" id="mainListPoints">
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListFirstItem"><p>{one}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListSecondItem"><p>{two}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListThirdItem"><p>{three}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListFourthItem"><p>{four}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListFifthItem"><p>{five}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListSixthItem"><p>{six}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListSeventhItem"><p>{seven}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListEightItem"><p>{eight}</p></div></li>                
              </ul>
            </div>
            <div className="about-cont-third-cont-headsec" id="secondSectionHead">
              <div className="about-cont-third-cont-headsec-main" id="workMoreHeadMainSecond">{companytwo}</div>
              <div className="about-cont-third-cont-headsec-subfir" id="workMoreSubFirMainSecond">{locationtwo}</div>
              <div className="about-cont-third-cont-headsec-subsec" id="workMoreSubSecMainSecond">{periodtwo}</div>
            </div>
            <div className="about-cont-third-cont-list" id="secondListThirdSection">
              <ul className="about-cont-third-cont-list-cont" id="mainListPointsSecond">
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListNineItem"><p>{nine}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListTenItem"><p>{ten}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListElevenItem"><p>{eleven}</p></div></li>
                <li className="about-cont-third-cont-list-cont-item"><div className="about-cont-third-cont-list-cont-item-cont" id="mainListTwelveItem"><p>{twelve}</p></div></li>                              
              </ul>
            </div>             
          </div>
        </div>     
      </div>  
      </div> 
    
  );


}
 
export default Work;