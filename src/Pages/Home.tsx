import { NavLink } from "react-router-dom"
// import HomeSection1 from "../Components/HomeSection1"
import HomeSection2 from "../Components/HomeSection2"
import Featured from "../Components/Featured"




const Home = () => {

//  interface Dish {
//     id: number,
//     price: number,
//     img: string,
//     stock: number;
//     name: string,
//  }  


  
  return (
    <div style={{ overflow: 'hidden',width:"100%" , margin:'0px' , padding:'0px' , position:'relative'}}>
      <div className="home">
      <video autoPlay loop className="home_img" src="./logo/bn2.mp4" /> 
      {/* <img className="home_img2" src="./logo/7.jpg" /> */}
      <div className="explore">
        <h1 className="tagline">Burgers, makes you <span className="burgman">Burgman</span></h1>
        <div style={{display:'flex' , justifyContent:'center' ,  width:'100%'}}>
        <NavLink to='/menu' style={{textDecoration:'none' }}><p className="explore_button" style={{border:'2px green solid'}}>Explore Menu</p></NavLink> 
        </div>
      </div>
      </div>

      <img style={{width:'100%'}} src="./logo/6.png" />
      <Featured />
      {/* <HomeSection1 /> */}
      <HomeSection2 />
     
    </div>
  )
}

export default Home