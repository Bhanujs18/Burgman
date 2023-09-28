import { NavLink } from "react-router-dom"
import HomeSection1 from "../Components/HomeSection1"
import HomeSection2 from "../Components/HomeSection2"




const Home = () => {

//  interface Dish {
//     id: number,
//     price: number,
//     img: string,
//     stock: number;
//     name: string,
//  }  
  
   
  
  return (
    <div >
      <div className="home">
      <img className="home_img" src="./logo/3.jpg" />
      <img className="home_img2" src="./logo/7.jpg" />
      <div className="explore">
        <h1 className="tagline">Burgers, makes you Burgman</h1>
        <div style={{display:'flex' , justifyContent:'center' ,  width:'100%'}}>
        <NavLink to='/menu'><button className="explore_button">Visit Store</button></NavLink> 
        </div>
      </div>
      </div>
      <HomeSection1 />
      <HomeSection2 />
    </div>
  )
}

export default Home