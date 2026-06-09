import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx'

const ContactUs = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
    // Handle form submission logic here


  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.contactContainer}>
        
        {/* Left Side: Image Section */}
        <div className={styles.imageSection}>
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
            alt="Fashion Models" 
          />
        </div>

        {/* Right Side: Content & Form Section */}
        <div className={styles.contentSection}>
          <h1 className={styles.mainHeading}>Contact Us</h1>
          
          <div className={styles.formAndDetailsBox}>
            <div className={styles.formColumn}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <input type="text" id="message" required />
                </div>
                <button type="submit" className={styles.submitBtn}>Contact Us</button>
              </form>
            </div>

            <div className={styles.detailsColumn}>
              <div className={styles.infoBlock}>
                <h3>Contact</h3>
                <p><a href="mailto:hi@fashion.com">hi@fashion.com</a></p>
              </div>
              
              <div className={styles.infoBlock}>
                <h3>Based in</h3>
                <p>San Francisco,<br />California</p>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  };