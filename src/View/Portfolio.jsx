import React from "react";
import "./Portfolio.css";
import amazon from "./Images/amazon.png";
import myimage from "./Images/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import fb from "./Images/fbr.png";
import omkar from "./Images/omkar.jpg";

const Portfolio = ()=>{
    return(
       <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Omkar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link " aria-current="page" href="#home1">Home</a>
                  <a className="nav-link" href="#about">About</a>
                  <a className="nav-link" href="#skills">Skills</a>
                  <a className="nav-link" href="#Qualification">Qualification</a>
                  <a className="nav-link" href="#project">Projects</a>
                  <a className="nav-link" href="#contactme">Contact-Me</a>
                  
                </div>
              </div>
            </div>
          </nav>
         
          <section id="home1" className="homesec">
                  <div className="home-text">
                    <h1 className="omkarhead"> Hi, I am Omkar Gangadhare.</h1>
                    <h4 className="caption">Passionate Web Developer with a Creative Edge</h4>
                    <p> I am excited about the opportunity to work on
                         your next project. Feel free to explore my
                          portfolio and get in touch to discuss how
                           we can br/ing your ideas to life. </p>
                   </div>
                   <div className="home-img">
    <img src={omkar}/>
                   </div>
                   <div className="button1">
                    <a href="#contactme" className="btn btn-primary"> Contact-Me</a>
                   </div>
                   
          </section>
          
           
          <section id="about" className="aboutsec">
    <h2> About me</h2>
    <div >
    <img className="aboutimg" src={myimage}/>
    </div>
    <div className="aboutparagraph">
    <p>I'm passionate about technology and an avid reader. <br/>I have a self-motivated and can-do attitude, thriving in<br/> challenging and dynamic environments.<br/> Seeking a competitive position to enhance my skills <br/>and contribute to a professional organization. <br/>I'm very much passionate to learn new stuff that <br/>interests me and can help me to get better.</p>
    </div>
          </section>
  
          <section id="skills" className="skillssec">
            <h1>Skills</h1>
    <div  className="prglg"><h2>Programming Languages</h2> <p> 1.C <br/>2.Javascript</p></div>
    <div className="techno"><h2>Technologies</h2><p> 1.HTML<br/>2.CSS<br/>3.REACT<br/>4.SQL</p></div>
          </section>
      
           <section id="Qualification" className="quali">
    <h1>Qualification</h1>
    <div className="ssc">
      <h2>SSC</h2>
      <p><b>Highschool</b>: S.M. Lohia Highschool, Kolhapur<br/>
     <b> Board</b>:Maharashtra Board<br/>
      <b>Year of Passing</b>: 2014<br/>
      <b>Percentage</b>:91.20%</p>
    
    </div>
    <div className="hsc">
      <h2>HSC</h2>
      <p><b>College</b>: New College, Kolhapur<br/>
     <b> Board</b>:Maharashtra Board<br/>
      <b>Year of Passing</b>: 2016<br/>
      <b>Percentage</b>:70.15%</p>
    
    </div>
    <div className="be">
      <h2>BE (Mechanical)</h2>
      <p><b>College</b>: KIT college, Kolhapur<br/>
     <b> University</b>: Shivaji University<br/>
      <b>Year of Passing</b>: 2020<br/>
      <b>Percentage</b>:77.19%</p>
    
    </div>
           </section>
         
         
            <section className="projectsec" id="project">
              <h1>Projects</h1>
    <div className="amazon">
      <h3 className="amazonhead">Amazon clone</h3>
      <img className="amazonimg" src={amazon}/>
      <div className="button2">
        <a href="https://github.com/obgangadhare/amazon_react.git" target="_blank" className="btn btn-primary"> Source code</a>
       </div>
       <div className="button3">
        <a href="https://amazon-react12.netlify.app/" target="_blank" className="btn btn-primary"> See Live</a>
       </div>
    </div>
 
    <div className="netflix">
      <h3 className="netflixhead">Facebook clone</h3>
      <img className="netfliximg" src={fb}/>
      <div className="button4">
        <a href="https://github.com/obgangadhare/facebook_react.git" className="btn btn-primary"> Source code</a>
       </div>
       <div className="button5">
        <a href="https://fbr125.netlify.app/" className="btn btn-primary"> See Live</a>
       </div>
    </div>
            </section>
         
            <section id="contactme" className="contactmesec">
              <h1>Contact Me</h1>
    <div className="mobno">
      <i className="fa-solid fa-phone"></i><p>: +91-7744941998</p> 
      
    </div>
    <div className="email1">
      <i className="fa-solid fa-envelope"></i><p>: obgangadhare@gmail.com</p> 
    </div>
    <div className="address">
      <i className="fa-solid fa-location-dot"></i><p>33/B  SIDDHAGIRI, Puikhadi, <br/>Pirwadi, Kolhapur-416001.</p> 
    </div>
    <form>
    <div className="namesend">
      
      <input className="namein" type="text" placeholder="Name"/> <br/><br/>
      <input className="namein" type="email" placeholder="Email"/> <br/><br/>
      <textarea className="namein"  placeholder="Message"></textarea>
    </div>
    <div className="button6">
      <a href="#" className="btn btn-primary"> Send Message</a>
     </div>
    </form>
            </section>
            </div>
    )
}
export default Portfolio;