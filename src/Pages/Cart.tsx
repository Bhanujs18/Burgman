import { useSelector } from "react-redux/es/hooks/useSelector"
import CartCard from "../Components/CartCard";
import { CheckOut } from "../Components/CheckOut";
import { getAuth } from "firebase/auth";
import Login from "./Login";

import MenuHeader from "../Components/MenuHeader";
import { NavLink } from "react-router-dom";
// import { getAuth } from "firebase/auth";;
// import Login from "../Components/Login";





const Cart = () => {
   
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
  const products = useSelector((store:any) =>store.menu.cart) 
  const qty = products;
  let totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
  let totalamt:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=((cur.product.price)*cur.quantity),0);
  let pay:number = totalamt+(Math.round(0.05*totalamt));
  if(pay<0 || totalqty<0 || totalamt<0){
  pay=0;
  totalamt=0;
  totalqty=0;
  }

  return (
  <div style={{background:'white'}}>
      <MenuHeader text={'Cart'} />
   
  
    {(totalqty<=0) ? <NavLink style={{color:'green' , textDecoration:'none' , display:'flex' , justifyContent:'center' , width:'100%' , padding: '2rem'}} to='/menu'>Cart Empty! Goto Menu</NavLink> :

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
         <p>Total Amount Payable Rs {totalamt+(Math.round(0.05*totalamt))}/-</p>
         <hr />
         <div>
         {(totalamt>0)? <CheckOut  pay={pay}  />: <p style={{color: 'red'}}>Add items to checkout</p>}
        </div>
        </div>
    </div>
    
    </div> }
    </div>
  )
   
}
else{
  console.log("notloggedin");
  return(
 <Login />
  )
}} 

export default Cart;