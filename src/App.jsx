import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Events from './pages/Events'
import Careers from './pages/Careers'
import Memberships from './pages/Memberships'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[var(--pt-ivory)] text-neutral-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App