
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai'

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
       }

    .navbarlinks{
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-right: 1.5rem;
   .navbar_link{
      color: white;
      text-decoration: none;
    }
      }

}
`

const NavBar = () => {
  return (
    <Wrapper>
        <div className="navbar">
            
            <div>
                <NavLink to='/'><img className="navlogo" src='./logo/1.png' /></NavLink>
            </div>
            <div className="navbarlinks">
        <NavLink className='navbar_link' to="/">Home</NavLink>
        <NavLink className='navbar_link' to="/menu">Menu</NavLink>
        <NavLink className='navbar_link' to="/about">About Us</NavLink>
        <NavLink className='navbar_link' to="/contact">Contact Us</NavLink>
        <NavLink className='navbar_link' to="/cart"><AiOutlineShoppingCart /></NavLink>
            </div>

         </div>
           
    </Wrapper>
  )
}

export default NavBar;