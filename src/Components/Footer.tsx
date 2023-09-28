
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {BsInstagram , BsFacebook , BsTwitter } from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';

const Wrapper = styled.section`
background-color: green;
color: white;

.footerDiv{
    display:flex;
    width: 100%;
    padding: 0.3rem 3rem;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;

    .footerlogo{
        padding-top: 0.4rem;
        height: 10rem;
        filter: drop-shadow(0 0 0.75rem black);
    }

    .footer-div-sections{
        display: flex;
         width: 100%;
         justify-content: center;
         .links{
          display: flex;
      .footer-links{
          display: flex;
          flex-direction: row;
          text-decoration: none;
          color: white;
          justify-content: center;
          font-size: 1rem;
                }}

        .footer-icons{
            display: flex;;
            font-size: 2rem;
            padding: 0.4rem;
            &:hover{
                transform: scale(1.2);   
              
                }
        }        
         }
}

@media(max-width: 1197px){
.footerDiv{
  display: inline-block;
  .footerlogo{
    height: 5rem;
  }
  .footer-div-sections{
    display: flex;
    .none{
      display: none;
    }
  }
}
}

@media(max-width: 644px){
.copyright{
  font-size: 0.6rem;
  text-align: center;
}
`

const Footer = () => {
   
  return (
    <Wrapper>
     <div className='footerDiv'>
        <div className='footer-div-sections'  style={{display:"flex" , justifyContent:"center" , width:'100%'}}>
        <img alt="main-logo" src="./logo/1.png" className='footerlogo' />
        </div>
        <div className='footerDiv'>
         <div className="footer-div-sections none">
            
            <ul className='none'>
            <li>
            <NavLink className="footer-links" to='/'>Home</NavLink> 
            </li>
            <li>
            <NavLink className="footer-links" to='/menu'>Menu</NavLink>
            </li>
            <li>
            <NavLink className="footer-links" to='/about'>About Us</NavLink>
            </li>
            <li>
            <NavLink className="footer-links" to='/contact'>Contact Us</NavLink>
            </li>
            </ul>
        </div>
        <div className="footer-div-sections">
          <div className='links'>
        <a href='https://www.instagram.com/' style={{color: "white"}}><BsInstagram className='footer-icons' /></a>
        <a href='https://www.facebook.com/' style={{color: "white"}}>    <BsFacebook className='footer-icons'/> </a>
        <a href='https://www.twitter.com/' style={{color: "white"}}>    <BsTwitter className='footer-icons'/> </a>
        <a href='https://www.gmail.com/' style={{color: "white"}}>     <AiFillMessage className='footer-icons'/></a>
         </div>
        </div>
       
        <div className="footer-div-sections">
        <div className='none'>
          <p>Call Us</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
        </div>
        </div>
        </div>
     </div>
     <p className='copyright'>© 2023 Tik Tik. All rights reserved</p>
    </Wrapper>
  )
}

export default Footer