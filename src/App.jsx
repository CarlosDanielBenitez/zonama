
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/header'
import { ContactForm } from './pages/contact'

function App() {

  return (
    <Router>
      <>
        <NavBar/>
      
        <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/contact' element={<ContactForm />} />
        </Routes>

      </>
    </Router>
  )
}

export default App
