import styled from "styled-components";
import {AiFillInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import {FaTwitter} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
const Wrapper = styled.section`
  .card{
    width: 100%;
  } 
`

const Example = () => {
  return (
    <Wrapper>
        <div className="card">


      <div className="img-bx">
         <img className="contact-img" src="../logo/abc.png" />
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