
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import { HashLoader } from "react-spinners";
import { useDispatch } from "react-redux"
import { updatemenu } from "../features/menuSlice"
import API from "../Links/link"
import { useEffect, useState } from "react"
import axios from "axios"
import MenuHeader from '../Components/MenuHeader';



const Menu =  () => {

  const [isLoading,setIsloading] = useState(true);
   
const dispatch = useDispatch();

const menu = async (API:any) => { 
try{
const res = axios.get(API);
const pro = (await res).data;
setIsloading(false);
dispatch(updatemenu(pro));

}catch(err){
console.log(err);
}
}
useEffect(() => {
menu(API);
},[])
  
  const pro = useSelector((store:any) => store.menu.products) 
  if(!isLoading){
  return (
 <div style={{width:'100%', backgroundColor:'black'}}>
  <MenuHeader text={'Menu'} />
  {/* <img className='menu_banner' src='./logo/6.png' /> */}
    <div className='card_div'> 
      {pro.map((product:any, index:any)=>{
       return( 
       <Card key={index} product={product} />
      )}
      )}
    </div>
    </div>

  )}else{
    return(
      <div style={{padding:'10rem 0rem' , display:'flex' , justifyContent:'center' , backgroundColor:'black'}}>
     <HashLoader
  color="green"
  />
     </div>
    )
  }
}

export default Menu