
import { styled } from "styled-components";

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




    return(
        <Wrapper>
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
            <hr />
            
            <div>
              <img src="./logo/2.jpg" alt="aboutus" style={{width:"100%"}} />
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