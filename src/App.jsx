import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import { Pricing } from './Pages/Pricing.jsx'
import { Booking } from './Pages/Booking.jsx'
import { Layout } from './Layout.jsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path="/booking" element={<Booking />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App