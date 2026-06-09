import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact.jsx';
import Abou

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About />}/>
     </Routes>
    </>
  )
}

export default App
