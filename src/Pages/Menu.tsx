
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

import { useDispatch } from "react-redux"
import { updatemenu } from "../features/menuSlice"
import API from "../Links/link"
import { useEffect } from "react"
import axios from "axios"
import MenuHeader from '../Components/MenuHeader';



const Menu =  () => {

   
const dispatch = useDispatch();
const menu = async (API:any) => {
const res = axios.get(API);
const pro = (await res).data;
dispatch(updatemenu(pro));
}

useEffect(() => {
menu(API);
},[])
  
  const pro = useSelector((store:any) =>store.menu.products) 
  if(pro){
  return (
 <div style={{width:'100%'}}>
  <MenuHeader text={'Menu'} />
  <img className='menu_banner' src='./logo/6.png' />
    <div className='card_div'> 
      {pro.map((product:any, index:any)=>{
       return( 
       <Card key={index} product={product} />
      )}
      )}
    </div>
    </div>

  )}else{
    <p>API NOT FETCHING DATA...</p>
    
  }
}

export default Menu