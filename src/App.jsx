
import Header from "./components/Header"
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Banner from "./pages/Banner"
import ToDo from "./pages/ToDo"
import Booking from "./pages/Booking"
import Tour from "./pages/Tour"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />}/>
        <Route path="/booking" element={<ToDo />} />
      </Routes>
      <Routes>
       <Route path="/destination" element={<Booking />}/>
       <Route path="/tour" element={<Tour />} />
       <Route path='/testimonials' element={<About />} />
       <Route path="/blog" element={<Blog />} />
      </Routes>
      <Header />
      <Footer />
      {/* <div className="h-[4000px] "></div> */}
    </>
  )
}

export default App