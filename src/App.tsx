import { Routes , Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Menu from "./Pages/Menu"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"




const App = () => {
  return (
    
     <div>
      
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/menu" element={<Menu />}/>
      </Routes>
      <Footer />

      </div>
     
   
  )
}

export default App