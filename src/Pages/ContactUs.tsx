

import styled from "styled-components";
import MenuHeader from "../Components/MenuHeader";
import Example from "../Components/Example";


const ContactPage = styled.div`


  .heading {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin: 0;
    padding: 2rem 0rem;
    font-weight: 700;
  }
  @media(max-width:700px){
    .heading{
      font-size: 1.2rem;
      padding: 1rem 0rem;
    }
  }
`;

const ContactUs = () => {
  return (
    <ContactPage>
   <MenuHeader text={'Contact us'} />     
   <Example />
    </ContactPage>
  );
};

export default ContactUs;
