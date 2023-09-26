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
      <div className="explore">
        <h1 style={{color:'white'}}>Burgers, makes you Burgman</h1>
        <div style={{display:'flex' , justifyContent:'center' ,  width:'100%'}}>
        <button className="explore_button">Visit Store</button>
        </div>
      </div>
      </div>
      <HomeSection1 />
      <HomeSection2 />
    </div>
  )
}

export default Home