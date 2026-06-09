// import React from 'react';

import '../Pages.css'
import

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        
        {/* Left Side: Content Section */}
        <div className="text-section">
          <h1 className="greeting-heading">
            Heya <span className="wave-emoji" role="img" aria-label="waving hand">👋🏽</span>
          </h1>
          
          <p className="intro-text">
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
  );
};

export default AboutMe;