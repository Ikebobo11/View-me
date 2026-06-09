const ContactUs = () => {


  return (
    <div className="body-wrapper">
      <div className="contact-container">
        
        {/* Left Side: Image Section */}
        <div className="image-section">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
            alt="Fashion Models" 
          />
        </div>

        {/* Right Side: Content & Form Section */}
        <div className="content-section">
          <h1 className="main-heading">Contact Us</h1>
          
          <div className="form-and-details-box">
            <div className="form-column">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="input-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" required />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <input type="text" id="message" required />
                </div>
                <button type="submit" className="submit-btn">Contact Us</button>
              </form>
            </div>

            <div className="details-column">
              <div className="info-block">
                <h3>Contact</h3>
                <p><a href="mailto:hi@fashion.com">hi@fashion.com</a></p>
              </div>
              
              <div className="info-block">
                <h3>Based in</h3>
                <p>San Francisco,<br />California</p>
              </div>
{/* 
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  );
};

export default ContactUs;