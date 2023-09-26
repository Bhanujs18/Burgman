
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {BsInstagram , BsFacebook , BsTwitter } from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';

const Wrapper = styled.section`
background-color: green;
color: white;

.footerDiv{
    display:flex;
    padding: 1rem 3rem;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;

    .footerlogo{
        height: 15rem;
    }

    .footer-div-sections{
        display: inline-block;
      
       
      .footer-links{
          display: flex;
          flex-direction: row;
          text-decoration: none;
          color: white;
          font-size: 1rem;
                }

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
`

const Footer = () => {
   
  return (
    <Wrapper>
     <div className='footerDiv'>
        <div className='footer-div-sections'  style={{display:"flex" , justifyContent:"center"}}>
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
        <a href='https://www.instagram.com/' style={{color: "white"}}><BsInstagram className='footer-icons' /></a>
        <a href='https://www.facebook.com/' style={{color: "white"}}>    <BsFacebook className='footer-icons'/> </a>
        <a href='https://www.twitter.com/' style={{color: "white"}}>    <BsTwitter className='footer-icons'/> </a>
        <a href='https://www.gmail.com/' style={{color: "white"}}>     <AiFillMessage className='footer-icons'/></a>
        </div>
       
        <div className="footer-div-sections">
        <div className='none'>
          <p>Call Us</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423</p>
        </div>
        </div>
        </div>
     </div>
     <p>© 2023 Tik Tik. All rights reserved</p>
    </Wrapper>
  )
}

export default Footer