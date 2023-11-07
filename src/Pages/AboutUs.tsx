
import { styled } from "styled-components";
import MenuHeader from "../Components/MenuHeader";
import { useRef } from "react";
import useLazyLoad from "../useLazyLoad";

const Wrapper = styled.section`
text-align: justify;
.contactTitle{
    display: flex;
    align-items: center;

    justify-content: center;

  }
  .whoweare{
    display: flex;
    justify-content: center;
    padding: 2rem 2rem;
    .paradiv{
      display: flex;
      .parahead{
        width: 20%
      }
      .para{
        width: 80%;
       
      }
    }
  }

  @media(max-width: 755px){
    display: block;
    
   
    .whoweare{
     display: flex;
     align-items: center;
     justify-content: center;
    .paradiv{
      display:block;
      align-items: center;
      justify-content: center;
      .parahead{
        align-items: center;
        width: 100%;
      }
      .para{
        width: 100%
       
      }
     }
    }
  }
}
`

const AboutUs = () =>{

const triggerref = useRef(null)
const useLazyLoad = ({ triggerRef, onGrabData, options })
    return(
        <Wrapper>
          
          <MenuHeader text={'About us'} />
            <div className="whoweare">
            <div className="paradiv">
            <h1 className="parahead">Who We Are</h1>
            <hr  style={{margin: "1rem"}}/>
            <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            </p>
            </div>
            </div>
            
        
            <div>
             
                 <img ref={triggerref} style={{width:'100%'}} loading="lazy" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1698661366/Burgers_Makes_you_Burgman_kvfa2b.png"  /> 
              
              </div>
            <div className="whoweare">
            <div className="paradiv">
            <h1 className="parahead">What We Are</h1>
            <hr  style={{margin: "1rem"}}/>
            <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, corrupti, eum veniam vel, iure porro expedita nostrum iste asperiores ipsa quam praesentium dolor assumenda. Eius asperiores aspernatur sit explicabo iste.s
            </p>
            </div>
            </div>
         </Wrapper>
    )
}
export default AboutUs;