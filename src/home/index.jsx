import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/header'
import { ContactForm } from '../pages/contact'
import Articles from '../pages/articles';
import ServicesPage from '../pages/services/page';
function Home() {

  return (
    <Router>
      <>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Articles/>} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/articles" element={<Articles />} />
        <Route path='/services' element={<ServicesPage/>} />
        </Routes>

       
      </>
    </Router>
  )
}

export default Home
