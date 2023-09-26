import { useDispatch , useSelector} from 'react-redux';
import API from '../Links/link';
import axios from 'axios';
import {useEffect} from 'react';
import { updatemenu } from '../features/menuSlice';
import Card from '../Components/Card';




const Menu =  () => {

  const dispatch = useDispatch();
  const menu = async (API:any) => {
  const res = axios.get(API);
  const pro = (await res).data;
  dispatch(updatemenu(pro));
  }

  useEffect(() => {
  menu(API);
  }, [])
  
  const products = useSelector((store:any) =>store.menu.products) 
  return (
 <div style={{width:'100%'}}>
  <img className='menu_banner' src='./logo/6.png' />
    <div className='card_div'> 
      {products.map((product:any, index:any)=>{
       return( 
       <Card key={index} product={product} />
      )}
      )}
    </div>
    </div>

  )
}

export default Menu