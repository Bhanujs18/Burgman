
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsList} from 'react-icons/bs';
import { useState } from "react";
import { CgClose } from 'react-icons/cg';
import { useSelector } from "react-redux";


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
    }
      }
      .icons{
       display: none;
      }

}

@media(max-width:644px){
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
    .icons{
      display: flex;
      color: white;
      font-size: 2rem;
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

const NavBar = () => {

 const [icon, setIcon] = useState(true);

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
              {icon ? <BsList className="open" onClick={()=>setIcon(false)} />  :   <CgClose className="close" onClick={()=>setIcon(true)}/>}
            </div>
           
            <div  className= {icon ? "navbarlinks" : "mobmenu"}>
        <NavLink className='navbar_link' to="/" onClick={()=>setIcon(true)}>Home</NavLink>
        <NavLink className='navbar_link' to="/menu" onClick={()=>setIcon(true)}>Menu</NavLink>
        <NavLink className='navbar_link' to="/about" onClick={()=>setIcon(true)}>About</NavLink>
        <NavLink className='navbar_link' to="/contact" onClick={()=>setIcon(true)}>Contact</NavLink>
        <NavLink className='navbar_link' to="/login" onClick={()=>setIcon(true)}>Login</NavLink>
        <NavLink className='navbar_link' to="/signup" onClick={()=>setIcon(true)}>SignUp</NavLink>
        <NavLink className='navbar_link' to="/cart" onClick={()=>setIcon(true)} ><AiOutlineShoppingCart /><p>{totalqty}</p></NavLink>
            </div>


           
          

         </div>
           
    </Wrapper>
  )
}

export default NavBar;