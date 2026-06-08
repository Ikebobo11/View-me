import '../App.css';
import Ficon from '../assets/f-icon.png';
import Linked from '../assets/link-icon.png';
import Github from '../assets/git-icon.png'


export default  function Footer() {
    return(
        <>
    <footer>
      <main>
        <div className='foot-head'>
          <h1>Explore My Engineeing & Design Portfolio</h1>
          <p>Dive into a collection of projects. form deep-learning models to intuitive user platform, developed for enovation leaders.</p>
          <button>View Case Studies</button>
        </div>
          <div style ={{display:'flex', justifyContent:'space-between', marginBlock:'15px' }}>
            <p>Full-Stack platforms</p>
            <p>Front-End Development</p>
            <p>UI/UX Design</p>
            <p>Wordpress</p>
          </div>
          <hr style={{backgroundColor:'white', height:'5px'}}/>
        <div style={{backgroundColor:'#04060f', borderTop:'10px solid black', marginBlock:'50px',}}>
          <div style={{width:'30px', }}><img style={{width:'100%', filter:'invert(1)'}} src={Ficon} /></div>
          <div style={{width:'30px', }}><img style={{width:'100%', filter:'invert(1)'}} src={Linked} /></div>
          <div style={{width:'30px', }}><img style={{width:'100%', filter:'invert(1)'}} src={Github} /></div>

        </div>
      </main>
    </footer>
        </>
    )
}