
import { useEffect, useState} from "react";

import { HashLoader } from "react-spinners";
import API from "../Links/link";
import axios from "axios";
import Card from "./Card";

const HomeSection2 = () => {

const [fdata, setFdata] = useState([]);
const [isLoading,setIsloading] = useState(true);
    
const menu = async (API:any) =>{
  try{
 const res = await axios.get(API);
 const products = await res.data;
 setFdata(products);
 setIsloading(false);
  }catch(err){
    alert(err);
    console.log(err)
  }
}

useEffect(() => {
  menu(API);
  },[])

if(isLoading) {
  return(
    <div style={{padding:'2rem 0rem' , display:'flex' , justifyContent:'center' , backgroundColor:'black'}}>
   <HashLoader
color="green"
/>
   </div>
  )
 }
  else{
    return (
      <div style={{width:'100%', backgroundColor:'black'}}>
        <div className="burgman_specials_div">      
           <img className='burgman_specials' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699345107/Burgman_Specials__1_-removebg-preview_ekuezh.png' />
        </div>

         <div className='card_div'> 
          <Card product={fdata[13]}/>
          <Card product={fdata[3]}/>
          <Card product={fdata[5]}/>
          <Card product={fdata[6]}/>
          <Card product={fdata[8]}/>
         </div> 
       </div>
       )
  }
}

export default HomeSection2;