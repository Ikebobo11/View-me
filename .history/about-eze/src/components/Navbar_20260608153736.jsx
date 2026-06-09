import '../App.css';
import Logo from '../assets/Neze Logo.png';
import {Link} from 'react-router-dom';
// import About from '../pages/About.jsx'

const Navbar = () =>{
    return(
        <>
           <main className="header-main">
          <img 
            style={{ width: '120px', height: 'auto' }} 
            src={Logo} 
            alt="Neze" 
          />
          <nav className="hide-link">
            <a className="at1" href="#work">WORK</a>
            <a className="at1" href="#services">SERVICES</a>
            <Link to='/About'>About</Link>
            <Link to></Link>
          </nav>

          <a className="hire" href="#contact">HIRE ME</a>

          <div className="allmenu">
            <i 
              className="fa-solid fa-bars" 
              id="menu" 
              style={{ width: '80px' }} 
            //   onClick={seeMenuNav}
            ></i>
            <i 
              className="fa-solid fa-x" 
              id="close" 
            //   onClick={hideMenuNav}
            ></i>
          </div>
        </main>
        </>
    )
}

export default Navbar