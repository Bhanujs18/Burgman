import { NavLink } from "react-router-dom"
import HomeSection1 from "../Components/HomeSection1"
import HomeSection2 from "../Components/HomeSection2"
import Featured from "../Components/Featured"
import { useDispatch } from "react-redux"
import { updatemenu } from "../features/menuSlice"
import API from "../Links/link"
import { useEffect } from "react"
import axios from "axios"




const Home = () => {

//  interface Dish {
//     id: number,
//     price: number,
//     img: string,
//     stock: number;
//     name: string,
//  }  
  
const dispatch = useDispatch();
const menu = async (API:any) => {
const res = axios.get(API);
const pro = (await res).data;
dispatch(updatemenu(pro));
}

useEffect(() => {
menu(API);
}, [])
  
  return (
    <div >
      <div className="home">
      <img className="home_img" src="./logo/3.jpg" />
      <img className="home_img2" src="./logo/7.jpg" />
      <div className="explore">
        <h1 className="tagline">Burgers, makes you Burgman</h1>
        <div style={{display:'flex' , justifyContent:'center' ,  width:'100%'}}>
        <NavLink to='/menu' style={{textDecoration:'none'}}><p className="explore_button">Explore Menu</p></NavLink> 
        </div>
      </div>
      </div>
      <Featured />
      <HomeSection1 />
      <HomeSection2 />
      <img style={{width:'100%'}} src="./logo/6.png" />
    </div>
  )
}

export default Home