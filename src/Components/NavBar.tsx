
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsList} from 'react-icons/bs';
import { useState } from "react";
import { CgClose } from 'react-icons/cg';
import { useSelector } from "react-redux";
import {  signOut } from "firebase/auth";
import { auth } from "../firebaseAuth/firebase";

const Wrapper = styled.section`
display: block;
background-color: green;

.navbar{
    display: flex;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: space-between;
    width: 100%;


    .navlogo{
        height: 5rem;
        padding: 0.4rem;
        filter: drop-shadow(0 0 0.75rem black);
       }
    .mobmenu{
      display: none;
    }
    .navbarlinks{
        display: flex;
        gap: 3rem;
        align-items: center;
        margin-right: 1.5rem;
   .navbar_link{
      color: white;
      text-decoration: none;
      .cartdiv{
        display: flex;
        align-items: center;
        fonr-size: 1.4rem;
        .cartnumber{
          background-color: white;
          color: green;
          font-size: 0.8rem;
          display: flex;
          justify-content: center;
          height: 1.1rem;
          width: 1.1rem;
          border-radius: 50%;
        }
      }
    }
      }
      .mobcart{
      display: none;
      }
      .icons{
       display: none;
      }

}

@media(max-width:770px){
  .navbar{
    display: flex;
    .navbarlinks{
      display:none;
    }
    .mobmenu{
      display: block;
      background-color: white;
      color: green;
      gap: 2rem;
      width:70vh;
      z-index: 999;
      .navbar_link{
        display: block;
        padding: 2rem;
        position: relative;
        color: green;
        text-decoration: none;
      }
       
    }
    .mobcart{
    display: flex;
    color: white;
    .cartdiv1{
      font-size: 3rem;
      display: flex;
      offset: none;
      align-items: center;
      .cartnumber1{
        font-size: 2rem;
        text-decoration : none;
      }
    }
    }
    .icons{
      gap: 1rem;
      display: flex;
      color: white;
      font-size: 4rem;
      cursor: pointer;

    .open{
      color: white;
      position: relative;
    }
    .close{
      z-index: 999;
      position: relative;
    }



    }

  }
}
`

const NavBar = (val:any) => {

  const [islog , setislog] = useState(val.islog)
  const [icon, setIcon] = useState(true);
  const logout = () =>{
    signOut(auth);
     setislog(null);
  }
 const products = useSelector((store:any) =>store.menu.cart) 
 const qty = products;
 const totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
  return (
    <Wrapper>
        <div className="navbar">
            
            <div>
                <NavLink to='/'><img className="navlogo" src='./logo/1.png' /></NavLink>
            </div>
           
            <div className="icons">
              <NavLink className='mobcart' to="/cart"><div className="cartdiv1"><AiOutlineShoppingCart /><p className="cartnumber1">{totalqty}</p></div></NavLink>
              {icon ? <BsList className="open" onClick={()=>setIcon(false)} />  :  <CgClose className="close" onClick={()=>setIcon(true)}/>}
            </div>
           
        <div  className= {icon ? "navbarlinks" : "mobmenu"}>
        {(islog !==null )? <NavLink to='' className='navbar_link'>{}</NavLink> : null }
        <NavLink className='navbar_link' to="/" onClick={()=>setIcon(true)}>Home</NavLink>
        <NavLink className='navbar_link' to="/menu" onClick={()=>setIcon(true)}>Menu</NavLink>
        <NavLink className='navbar_link' to="/about" onClick={()=>setIcon(true)}>About</NavLink>
        <NavLink className='navbar_link' to="/contact" onClick={()=>setIcon(true)}>Contact</NavLink>
        {(islog !==null )? <NavLink to='' className='navbar_link' onClick={logout}>logout</NavLink> :   <NavLink className='navbar_link' to="/login" >Login</NavLink>}
        <NavLink className='navbar_link' to="/cart" onClick={()=>setIcon(true)} ><div className="cartdiv"><AiOutlineShoppingCart /><p className="cartnumber">{totalqty}</p></div></NavLink>
       
            </div>


           
          

         </div>
           
    </Wrapper>
  )
}

export default NavBar;