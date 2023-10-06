
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsList} from 'react-icons/bs';
import { useState} from "react";
import { CgClose } from 'react-icons/cg';
import { useSelector } from "react-redux";

const Wrapper = styled.section`
display: block;
position: fixed;
width: 100%;
z-index: 999;
text-shadow: 2px 2px 2px black;
.sticky{
  position: fixed;
  background-color: green;
}
.navbar{
    display: flex;
    z-index: 999;
    gap: 1rem;
   
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
      font-size: 1.3rem;
      .cartdiv{
        display: flex;
        align-items: center;
        fonr-size: 1.4rem;
        .cartnumber{
          background-color: white;
          color: black;
          text-shadow: none;
          font-size: 0.8rem;
          display: flex;
          justify-content: center;
          height: 1.3rem;
          tranform: translate(-50%,50%);
          
          width: 1.5rem;
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
      text-shadow: none;
      display: block;
      background-color: white;
      color: green;
      gap: 2rem;
      width:100%;
      z-index: 999;
      .navbar_link{
        display: block;
        padding: 2rem;
        position: relative;
        color: green;
        text-decoration: none;
        .cartdiv{
          display: flex;
        }
      }
       
    }
    .mobcart{
    display: flex;
    color: white;
    text-decoration: none;
    align-items: center;
    .cartdiv1{
      display: flex;
      align-items:center;
      font-size: 1.4rem;
      .cartnumber1{
       display:flex;
       background-color: white;
       color: green;
       font-size:1rem;
       border-radius: 50%:
       
      }
    }
    }
    .icons{
      display: flex;
      color: white;
      font-size: 3rem;
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

 
  const [icon, setIcon] = useState(true);

   

 const products = useSelector((store:any) =>store.menu.cart) 
 const qty = products;
 let totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
 if (totalqty <0){
  totalqty=0;
 }

 const [old , setOld] = useState('navbar');
  window.onscroll = () => {
    let temp;
    let top = window.scrollY;
    if(top > 100){
      temp = "navbar sticky";
    }
    else{
      temp = "navbar";
    }
    return setOld(temp);
  }

  return (
    <Wrapper>
        <div className={old}>
            
            <div>
                <NavLink to='/'><img className="navlogo" src='./logo/1.png' /></NavLink>
            </div>
           
            <div className="icons">
               <NavLink className='mobcart' to="/cart"><div className="cartdiv1"><AiOutlineShoppingCart /><p>{totalqty}</p></div></NavLink>
              {icon ? <BsList className="open" onClick={()=>setIcon(false)} />  :  <CgClose className="close" onClick={()=>setIcon(true)}/>}
            </div>
           
        <div  className= {icon ? "navbarlinks" : "mobmenu"}>
        <NavLink className='navbar_link' to="/" onClick={()=>setIcon(true)}>Home</NavLink>
        <NavLink className='navbar_link' to="/menu" onClick={()=>setIcon(true)}>Menu</NavLink>
        <NavLink className='navbar_link' to="/about" onClick={()=>setIcon(true)}>About</NavLink>
        <NavLink className='navbar_link' to="/contact" onClick={()=>setIcon(true)}>Contact</NavLink>
        {(val.islog===false)? <NavLink className='navbar_link' to="/login"  onClick={()=>setIcon(true)} >Login</NavLink> : null}
        <NavLink className='navbar_link' to="/cart" onClick={()=>setIcon(true)} ><div className="cartdiv"><AiOutlineShoppingCart /><p className="cartnumber">{totalqty}</p></div></NavLink>
       
            </div>

            
           
          

         </div>
           
    </Wrapper>
  )
}

export default NavBar;