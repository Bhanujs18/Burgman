import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
background-image: url('https://i.pinimg.com/736x/86/66/1c/86661cf49e8be271efb9cf939d9e932e.jpg');
justify-content: center;
background-position: inherit;
background-repeat: no-repeat;
background-size: cover;
  width: 100%;
//   background-color: grey;
background-position: top;
align-items: center;
.div{
    display: block;
  
    padding-top: 1rem;
    margin-top: 1rem;
    .signup{
        text-align: center;
        color: white;
        font-size: 1.5rem;
    }
.credential{
    display: block;
    margin: 2rem;
    text-align: Center;
    outline: none;
    height: 2rem;
    color: green;
}
.logImage{
    height: 15rem;
    width: 15rem;
    align-items: center;
    border-radius: 50%;
    background-color: green;
}
}

@media(max-width: 600px){
    background-position: center;
    .div{
        padding: 2rem 0rem;
        margin: 1rem 0rem;
    }
}
`

const SignUp = () => {
  return (
    <Wrapper>
        <div>
        <div className="div">
            <div className="signup">
                <p>Sign Up</p>
            </div>
       
       <img  className='logImage credential'  src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" />
       <div>
       <input className="credential" type="text" placeholder="Name"  />
       <input className="credential" type="Password" placeholder="Phone" />
       </div>
       <input className="credential" type="text" placeholder="Email"  />
       <input className="credential" type="Password" placeholder="Password" />
       <div className="credential">
       <button className="button" style={{width:'100%'}}>Sign Up</button>
       </div>
       <div className="credential">
       <NavLink to='/login'><button className="button" style={{width:'100%' , backgroundColor:'grey'}}>Login</button></NavLink>
       </div>
       </div>
       </div>
    </Wrapper>
  )
}

export default SignUp;