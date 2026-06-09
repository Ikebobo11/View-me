// import React from 'react';

import '../Pages.css'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MySelf 


const AboutMe = () => {
  return (
    <>
    <Navbar />
 
    <div className="about-wrapper">
      <div className="about-container">
        
        {/* Left Side: Content Section */}
        <div className="text-section">
          <h1 className="greeting-heading">
            Neze <span className="wave-emoji" role="img" aria-label="waving hand">👋🏽</span>
          </h1>
          
          {/* <p className="intro-text">
            I'm <strong>Devasya</strong> and I like to think of myself as a <strong>Pi-shaped (π) designer</strong>. 
            I'm someone who thrives in high-impact environments while creating thoughtful, meaningful user experiences. 
            I'm passionate about exploring new challenges, <strong>learning from different industries</strong>, & working closely with others to craft solutions that genuinely connect with people.
          </p>
          
          <p className="description-text">
            What drives me is a fascination with <strong>how people interact with the world around them</strong>—whether 
            it's the excitement of unboxing a new phone, the smoothness of a luxury flight, or the simple joy of using a well-designed app. 
            <strong>These experiences remind me why I got into design: to create moments that feel rewarding & impactful.</strong> 
            When I'm not designing, you'll probably find me geeking out about <strong>aviation</strong>, playing <strong>badminton</strong>, or talking endlessly about <strong>travel</strong>, <strong>music</strong>, or <strong>movies</strong>. 
            I'm always curious, always exploring, & always looking to stay ahead of the curve.
          </p> */}

          <p style={{color:'white' }}>

            ## About Me

Hi, I'm **Ezeji Ikemba Nnabueze**, a web developer and digital entrepreneur passionate about technology and innovation. I specialize in creating modern, responsive websites and helping businesses build a strong online presence.

With experience in web development, graphic design, digital marketing, and branding, I enjoy turning ideas into practical digital solutions. I am constantly learning new technologies and improving my skills to deliver high-quality results for clients and businesses.

My goal is simple: **use technology to help brands grow and succeed online.**

          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="profile-image-section">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" 
            alt="Devasya looking upwards" 
            className="profile-img"
          />
        </div>

      </div>
    </div>
       <Footer />
    </>
  );
};

export default AboutMe;