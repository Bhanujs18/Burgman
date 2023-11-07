import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseAuth/firebase";

import { getAuth, sendEmailVerification } from "firebase/auth";

const Wrapper = styled.section`
display: flex;
background-image: url('https://res.cloudinary.com/dyqynjew8/image/upload/v1699076264/Screenshot_2023-11-04_110719_phu4xk.png');
background-position: inherit;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
padding: 2rem 0rem;
justify-content: center;
background-position: top;
align-items: center;
.div{
    display: block;
    padding-top: 1rem;
    margin-top: 1rem;
    background-color: rgb(255,255,255,0.3);
    border-radius: 15px;
    .signup{
        text-align: center;
        color: white;
        
        font-size: 1.5rem;
    }
  
.credential{
    display: block;
    margin: 2rem;
    border-radius: 5px;
   text-align: Center;
   border: none;
   padding: 1rem;
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
        gap: 1rem;
        .credential{
            margin: 2rem;
        }
    }
}
`

const Login = () => {
    JSON.parse(localStorage.getItem("isLogin?")as any);
    const navigate = useNavigate();
    const [error , setError] = useState("");
    const [values , setValues] = useState({
        email:"",
       password:""
    });
     



    const dataset = (e:any) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values ,[name]:value})
    }

    
const sendingMail = () =>{
    const {email} = values;
    if(!email){
        setError("Enter Mail to reset password");
        return;
    }
    const auth = getAuth();
    sendEmailVerification(auth.currentUser as any)
      .then(() => {
          alert("Sent");
      });
    }

        const handleSignUP = () =>{
        const {email  , password} = values;
        if(!email  || !password){
            setError("Fill all the Fields!!!");
            return;
        }
        else{
        setError(" ");
        signInWithEmailAndPassword(auth , email , password).then((res) =>
        { 
            console.log(res);
            navigate('/profile');
            localStorage.setItem("islogin?" , JSON.stringify(true));
            setError("Logged In SucessFully");
            
        }).catch((error)=>{
            setError(error.message);
            localStorage.setItem("islogin?" , JSON.stringify(false));
        })

        }
    }
  return (
    <Wrapper>
        <div>
      
        <div className="div">
        <div className="signup">
                
            {(error)?  <p className="error">{error}</p> : null}
            </div>
            <div style={{display:'flex' , alignItems:'center' , width: '100%' , justifyContent:'center'}}>
                <div style={{margin:'0' , padding:'0'}} className="loginBox">
            <div style={{width:'max-content' , margin:'0' , padding:'0'}}>
            <img  className='logImage credential'  src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" />
            <input className="credential" type="text" name="email" placeholder="Email" onChange={dataset} />
            <input className="credential" type="Password" name="password" placeholder="Password" onChange={dataset} />
            <div style={{display:'flex' , justifyContent:'center'}}>
            <p onClick={sendingMail} style={{textAlign:'center' , cursor:'pointer' , width:'max-content'}}>Forgot password?</p>
            </div>
            </div>
               </div>
           </div>
           <div>
       <div className="login_buttons">
       <button className="button" style={{width:'12rem'}} onClick={handleSignUP}>Login</button>
       <NavLink to='/signup'><button className="button" style={{width:'12rem'}}>Sign Up</button></NavLink>
       </div>
       </div>
    
       {/* <div style={{fontSize:'1.2rem'}}>
       <NavLink to="/signup" style={{textDecoration:'none'}}><p style={{color: 'white' , textDecoration:'none', textAlign:'center' , WebkitTextStroke:'0.4px black' }}>New User? <span style={{color:'green'}}><i>Sign Up here</i></span></p></NavLink> */}
       </div>
       </div>
    
    </Wrapper>
  )
}

export default Login;