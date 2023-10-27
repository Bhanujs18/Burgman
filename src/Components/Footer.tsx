
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {BsInstagram , BsFacebook , BsTwitter } from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';

const Wrapper = styled.section`
margin:0rem;
padding:0;
background-color: green;
height: 100%;
.footerDiv{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding:0;
  margin:0;

  .footer-div-sections{
    display: block;
    color: white;
    margin:0;
    padding:0;
    .footerlogo{
      margin : 2rem;
      height: 3rem;
      filter: drop-shadow(0 0 0.75rem black);
    }
    .footer-links{
      display: block;
      text-decoration: none;
      color: white;
      margin: 1rem;
    }
    .footer-icons{
      display: block;
      margin: 1rem;
      font-size: 1.7rem;
    }
  }

}
.copyright{
  text-align: center;
  color: white;
  font-size: 0.7rem;
}

// responsive -------------------------------------------------------------------

@media(max-width:700px){
  .footerDiv{
    display: block;
    align-items: center;
    width: 100%;
    
  
  
    .footer-div-sections{
      display: flex;
      color: white;
      justify-content: center;
      
    }
}


@media(max-width:636px){
  .footerDiv{
   
  
     .none{
      display: none;
     }
}



`

const Footer = () => {
   
  return (
    <Wrapper>
     <div className='footerDiv'>
       
       
        <div className='footer-div-sections'>
        <img alt="main-logo" src="./logo/logo.png" className='footerlogo' />
        </div>
       
       
       
        <div className='footerDiv'>
         <div className="footer-div-sections none">
            
            <NavLink className="footer-links" to='/'>Home</NavLink> 
                       
            <NavLink className="footer-links" to='/menu'>Menu</NavLink>
        
            <NavLink className="footer-links" to='/about'>About Us</NavLink>
            
            <NavLink className="footer-links" to='/contact'>Contact Us</NavLink>
            
        </div>



        <div className="footer-div-sections">

        <a href='https://www.instagram.com/' style={{color: "white"}}><BsInstagram className='footer-icons' /></a>
        <a href='https://www.facebook.com/' style={{color: "white"}}>    <BsFacebook className='footer-icons'/> </a>
        <a href='https://www.twitter.com/' style={{color: "white"}}>    <BsTwitter className='footer-icons'/> </a>
        <a href='https://www.gmail.com/' style={{color: "white"}}>     <BiLogoGmail className='footer-icons'/></a>
         
        </div>
       



        <div className="footer-div-sections none">
   
                    <p>Call Us</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
                    <p> +11 2143 23423,</p>
      
        </div>
        </div>



  
     </div>
     <p className='copyright'>© 2023 Burgman All rights reserved</p>
    </Wrapper>
  )
}

export default Footer;