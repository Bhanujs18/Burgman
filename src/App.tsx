import { Routes , Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Menu from "./Pages/Menu"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import OrderPlaced from "./Pages/OrderPlaced"
import OrderNotPlaced from "./Pages/OrderNotPlaced"
import Error from "./Components/Error"
import Login from "./Pages/Login"
// import Data from "./Pages/Data";
import SignUp from "./Components/SignUp"
import { useEffect , useState} from "react"
import { auth } from "./firebaseAuth/firebase"
import Profile from "./Pages/Profile"



const App = () => {

  const [islog, setIslogin] = useState(JSON.parse(localStorage.getItem("isLogin?") as any) || false);
 
useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
    if(user){
      setIslogin(true);
      console.log("login")
      localStorage.setItem("isLogin>" , JSON.stringify(islog));
    }else{
      setIslogin(false);
      
      localStorage.setItem("isLogin>" , JSON.stringify(islog));
    }
  })
 },);

 

  return (
    
     <div  style={{width:"100%" , margin:'0px', padding:'0px' , height:'100%'}}>
      <NavBar val={islog}/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/orderPlaced" element={<OrderPlaced />}/>
      <Route path="/orderNotPlaced" element={<OrderNotPlaced />}/>
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/data" element={<Data />}  /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      </div>
     
   
  )
}

export default App