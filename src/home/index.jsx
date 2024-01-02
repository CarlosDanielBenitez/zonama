import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/header'
import { ContactForm } from '../pages/contact'
import Articles from '../pages/articles';
import About from '../pages/about/page';
import { UserProvider} from '../context/UserContext'

function Home() {

  return (
    <UserProvider>

    <Router>
      <>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Articles/>} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path="/articles" element={<Articles />} />
        <Route path='/about' element={<About/>} />
        </Routes>

       
      </>
    </Router>
    </UserProvider>
  )
}

export default Home
