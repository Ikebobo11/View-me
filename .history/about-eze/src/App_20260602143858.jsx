import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from 

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
