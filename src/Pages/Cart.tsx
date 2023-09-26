import { useSelector } from "react-redux/es/hooks/useSelector"
import CartCard from "../Components/CartCard"


const Cart = () => {


  const products = useSelector((store:any) =>store.menu.cart) 
  console.log(products)
  return (
   
    <div className='card_div'> 
     Cart items
     {products.map((cur:any , index:number)=><CartCard key={index} product={cur.product} qty={cur.quantity}/>)}

    </div>
  )}

export default Cart;