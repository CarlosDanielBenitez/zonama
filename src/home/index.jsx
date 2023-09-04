import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/header'
import { ContactForm } from '../pages/contact'
import Articles from '../pages/articles';
function Home() {

  return (
    <Router>
      <>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Articles/>} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/articles" element={<Articles />} />
        </Routes>

       
      </>
    </Router>
  )
}

export default Home
