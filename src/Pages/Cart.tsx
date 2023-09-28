import { useSelector } from "react-redux/es/hooks/useSelector"
import CartCard from "../Components/CartCard";
import CheckOut from '../Components/CheckOut.js';

const Cart = () => {
 
  const products = useSelector((store:any) =>store.menu.cart) 
 const qty = products;
 const totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
 const totalamt:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=((cur.product.price)*cur.quantity),0);
 console.log(totalamt);
 const pay:number = totalamt+(Math.round(0.05*totalamt));
  return (

<div>
    <div className="cart_div">
   
    <div className='cart_card_div'> 
     Cart items
     {products.map((cur:any , index:number)=><CartCard key={index} product={cur.product} qty={cur.quantity}/>)}
    </div>
    <div className="checkout_div">
         <p>Checkout</p>
         <hr />
        <div>
         <p>Total qty = {totalqty} units</p>
         <p>Total Amount = Rs {totalamt}/-</p>
         <p>Tax 5% = Rs {Math.round(0.05*totalamt)}/-</p>
         <hr />
         <p>Total Amount Payable = Rs {totalamt+(Math.round(0.05*totalamt))}/-</p>
         <hr />
         <CheckOut  pay={pay}  />
        </div>
    </div>
   
    </div>
    </div>
  )}

export default Cart;