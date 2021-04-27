import Navbar from "./Navbar";
import Mobnav from "./MobNav";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  
  setTimeout(()=> {footSetUp()},10);
  
  function footSetUp(){
    document.getElementById("footicon").style.animation = "defaultFooterVisible 0s";
    document.getElementById("footicon").style.animationFillMode = "both";
  };

  function validateEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  function sendHook(){
    
    let nameIn = document.getElementById("name");
    let emailIn = document.getElementById("email");
    let txtIn = document.getElementById("yourtxt");
    let formErr = document.getElementById("formErr");

    

    if(nameIn.value == "" || emailIn.value == "" || txtIn.value == ""){
      
      //Fail to send because of the empty Full Name
      if(nameIn.value == ""){
        nameIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "All fields are required.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";

      //Fail to send because of the empty Email
      }else if(emailIn.value == ""){
        emailIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "All fields are required.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";

      //Fail to send because of the empty Text
      }else if(txtIn.value == ""){
        txtIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "All fields are required.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";
      }      
           
    }else{
      
      //Mail Sent ***
      if(validateEmail(emailIn.value)){        

        let templateParams = {
          formaName: nameIn.value,
          formaEmail: emailIn.value,
          yourText: txtIn.value
        };
        
        emailjs.send('', '', templateParams, '')
        .then(function(response) {
          formErr.innerHTML = ``;
          formErr.style.opacity = "0";
          formErr.style.visibility = "hidden";

          nameIn.value = '';
          emailIn.value = '';
          txtIn.value = '';

          nameIn.style.removeProperty('border');
          emailIn.style.removeProperty('border');
          txtIn.style.removeProperty('border');

          reactToGitClick();

        }, function(error) {
          console.log('FAILED...', error);
        });
        
      }
      //Fail to send because of the Invalid Email
      else{
        emailIn.style.border = "solid red 3px";  

        formErr.innerHTML = `<strong>${emailIn.value}</strong> seems to be an invalid email.`;
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";
      }
      
    }

  };

  function closeGitMsg(){
    document.getElementById("about-cont-five").style.animation = "takeOutGitMeg 1s";
    document.getElementById("about-cont-five").style.animationFillMode = "both";
  };

  function reactToGitClick(){
    document.getElementById("about-cont-five").style.animation = "zoomInGitMeg 1s";
    document.getElementById("about-cont-five").style.animationFillMode = "both";
  };

  
  
  return (  

    <div className="about">
      <div className="about-cont">
        <div className="about-cont-first" id="about-cont-first">
          <div className="navBar">
              <Navbar /> 
              <span className="navBar-line" id="navBar-line"></span>                              
          </div>
          <div className="about-cont-first-work-contact">
            <div className="about-cont-first-work-contact-left">
              <ul className="about-cont-first-work-contact-left-listcont" id="listcontcontact">
                <div className="about-cont-first-work-contact-left-listcont-front">like what you saw</div>                    
              </ul>
              <ul className="about-cont-first-work-contact-left-listcont-head-lower">
                <li className="about-cont-first-work-contact-left-listcont-head-lower-item">
                  <div className="about-cont-first-work-contact-left-listcont-head-lower-item-cont">
                   <p>First of all thank you for making it all the way to the contact page, it means a lot to me that you have taken a portion of your time to view my website.</p>
                   <p>If you think I might be a good fit for you or your company or if you just saw something on my website that you liked please don’t hesitate to contact me.</p>
                   <p>Of course if you found some bugs on one of my projects or if you have suggestions I would be glad to hear what you have to say.</p>
                   <p>In any case send me an email and let’s make some amazing stuff regardless of what it is, a new project or improvement of an existing project or patching up some mistakes, we are all human it happens.</p>
                   <p>Looking forward to hearing from you.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-cont-first-work-contact-right">
              <ul className="about-cont-first-work-contact-right-listcont" id="listcontcontactright">
                  <div className="about-cont-first-work-contact-right-listcont-front">Send Me an Email</div>                    
              </ul>
                <ul className="about-cont-first-work-contact-right-listcont-head-lower">
                  <li className="about-cont-first-work-contact-right-listcont-head-lower-item">
                    <div className="about-cont-first-work-contact-right-listcont-head-lower-item-cont">
                      <form className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form">                        
                        <label htmlFor="formaName" className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-namelbl" id="formErr" ></label>
                          <input type="text" id="name" name="formaName" className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-nameinput" placeholder="Full Name"/>                        
                            <input type="email" id="email" name="formaEmail" className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-nameinput" placeholder="Email"/>
                              <textarea name="yourText" id="yourtxt" className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-yourtxt" placeholder="Your Text"></textarea>
                                <div className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-sub">
                                  <a className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-sub-cont" onClick={sendHook}>
                                    <div className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-sub-cont-main">
                                      <FaRegEnvelope className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-sub-cont-main-icon" id="send-icon-contact"></FaRegEnvelope>                                  
                                      <div className="about-cont-first-work-contact-right-listcont-head-lower-item-cont-form-sub-cont-main-txt">Send</div>
                                    </div>                                  
                                  </a>
                                </div>
                      </form>
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
        <div className="navBarMob">
          <Mobnav />  
        </div> 
        <div className="about-cont-second" id="about-cont-second">
        </div> 
        <div className="about-cont-five" id="about-cont-five">
          <div className="about-cont-five-cont">
            <div className="about-cont-five-cont-close">
                <div className="about-cont-five-cont-close-item" onClick={closeGitMsg}>&times;</div>
            </div>
            <div className="about-cont-five-cont-head">
              <div className="about-cont-five-cont-head-main">Hi there,</div>              
            </div>
            <div className="about-cont-five-cont-txt">
              <p>Thank you for sending me a message I will get back to you as soon as possible.</p>                           
            </div>
          </div>
        </div>
      </div>
    </div>

  );


}
 
export default Contact;