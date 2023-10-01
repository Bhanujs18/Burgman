import { useSelector } from "react-redux/es/hooks/useSelector"
import CartCard from "../Components/CartCard";
import { CheckOut } from "../Components/CheckOut";
import { getAuth } from "firebase/auth";
import Login from "./Login";
// import { getAuth } from "firebase/auth";;
// import Login from "../Components/Login";





const Cart = () => {
  const localStorageCart=()=>{
    let user:any = localStorage.getItem("BurgmanLoggedin??");
    const parsedata = JSON.parse(user);
    if(parsedata) return true;
    return false;
    };
   let isauth = localStorageCart();
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
  isauth = true;
  localStorage.setItem("BurgmanLoggedin??" , JSON.stringify(true));
  console.log("loggedin")
  const products = useSelector((store:any) =>store.menu.cart) 
  const qty = products;
  const totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
  const totalamt:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=((cur.product.price)*cur.quantity),0);
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
  )
   
}
else{
  console.log("notloggedin");
  return(
 <Login />
  )
}} 

export default Cart;