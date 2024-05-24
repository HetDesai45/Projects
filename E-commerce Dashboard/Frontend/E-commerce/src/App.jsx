import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Signup from './Components/Signup'



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
