import styled from "styled-components";
import {AiFillInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import {FaTwitter} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Form from "./Form";
const Wrapper = styled.section`

background-color: black;
  .card{
    display:flex;
    justify-content:Center;
    background-color: black;
    align-items:Center;
    width: 100%;
    padding: 2rem 0rem;
  .img-bx{
    display: flex;
    align-items:center;
    overflow: hidden;
    gap: 2rem;
    background-color: rgb(255,255,255,0.6);
    border-radius: 15px;
    height: 21rem;
    padding: 2rem;
    transition: all 0.3s ease;
@media(max-width: 412px){
  height: 18rem;
  width: 17rem;
}

    .contact-img{
      display: flex;
      width: 13em;
      background-color: white;
      transition: all 0.3s ease;

      border-radius: 50%; 
      @media(max-width: 412px){
        width: 9rem;
        transition: all 0.3s ease;

      }
  }
  .the_burgman{
text-align:Center;
color: white;
padding: 1rem 0rem 0rem 0rem;
font-family: 'Luckiest Guy', cursive;
letter-spacing: 2px;
  }
  .mailbutton{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

    .content{
      display: block;
      background-color: rgb(255,255,255,0.2);;
      height: 21rem;
      padding: 2rem;      
        transition: all 0.3s ease;

      @media(max-width: 412px){
        height: 18rem;
        padding: 1rem;
        transition: all 0.3s ease;
      }
      .icons{
        display: block;
        color: white;
        font-size: 1.3rem;
      }

    }
  }
  } 

`

const Example = () => {

  const[mail,setMail] = useState(false);

  const close = ()=>{
    setMail(false);
  }

  return (
    <Wrapper>
        <div className="card">
      <div className="img-bx">
        <figcaption>
        <img className="contact-img" src="../logo/abc.png" />
                 <p className="the_burgman">The Burgman</p>
                 <div style={{display:'flex' , justifyContent:'center', width:'100%'}}>
                  <button  onClick={()=>setMail(true)} className="button text">Drop Mail</button>
                  </div>

        {(mail)? 
        <Form  close={close}/>
         : null}
        
        </figcaption>
        
         <div className="content">
         <NavLink className="icons" to={''}><AiFillInstagram /></NavLink>
         <NavLink className="icons" to={''}><BiLogoGmail /></NavLink>
         <NavLink className="icons" to={''}><FaTwitter /></NavLink>
      </div>

      </div>


     

    </div>
    </Wrapper>
  )
}

export default Example