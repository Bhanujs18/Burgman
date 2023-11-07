// import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {ImCross} from "react-icons/im";
// import emailjs from '@emailjs/browser';

const Wrapper = styled.section`
position: fixed;
top:0%;
bottom:0%;
right:0%;
left:0%;
width:100%;
height:100%;
z-index: 999;
background-color: rgba(0, 0, 0, 0.668);
`

const FormSection = styled.div`
  display: block;
  padding: 1rem;
  position: absolute;
  z-index: 999;
  top:50%;
  left: 50%;
  width: 20rem;
  transform: translate(-50%,-50%);
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 19px;
  background: green;
  position:relative;
  .cross{
    position:absolute;
    top:5%;
    color: white;
    right:5%;
  }
`;

const Heading = styled.p`
  display: flex;
  color: white;
  justify-content:center;
  font-family: 'Luckiest Guy', cursive;
letter-spacing: 2px;
  padding: 0rem 3rem;
  font-size: 1.7rem;
  margin: 0;
`;
const Container = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;

  .button {
    align-items: cenetr;
    padding: 1rem;
    border-radius: 6px;
    background-color: red;
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    box-shadow:
      rgba(0, 0, 0, 0.09) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: 7px;
    cursor:pointer;
  }
  .textarea{
    width: 17rem;
    border-radius: 8px;
    padding-left: 0.4rem;
    outline: none;
    color: green;
    border: 1px green solid;
  }
`;
const Inputs = styled.input`
  display: block;
  align-self: center;
  margin: 1.5rem 0rem;
  border-radius: 8px;
  border: none;
  width: 17rem;
  padding-left: 0.4rem;
  height: 3rem;
  color: green;
  border: 1px green solid;
  outline: none;
 
`;




const Form = ({close}:any) =>{
 


  return(
    <Wrapper>
    <FormSection>
            <Heading>DROP MAIL</Heading>
            <ImCross className='cross' onClick={close} />
            <Container>
              
              <div style={{ display: "block", width: "max-content" }}>
                <Inputs required type="text" placeholder="Name"  name="user_name" ></Inputs>
                <Inputs required type="text" placeholder="Mobile"  name="user_mobile" ></Inputs>
                <Inputs required type="email" placeholder="Email" name="user_email"></Inputs>
                <textarea
                  style={{ height: "5rem" }}
                  typeof="text"
                  required
                  placeholder="Message..."
                  name="message"
                  className='textarea'
                ></textarea>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                    
                <button className='button' onClick={close}>Send</button>
                </div>
              </div>
            </Container>
          </FormSection>
    </Wrapper>
    
  )
}

export default Form;

