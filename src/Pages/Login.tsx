import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseAuth/firebase";

const Wrapper = styled.section`
display: flex;
background-image: url('./logo/logingif.gif');
background-position: inherit;
background-repeat: no-repeat;
background-size: cover;

justify-content: center;
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
           
            navigate('/');
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
                
            {(error)?  <p style={{color:'green' , textAlign:'center' , backgroundColor:'white' , padding: "0.11rem" , zIndex:'2222'}}>{error}</p> : null}
            </div>
            <div style={{display:'flex' , alignItems:'center' , width: '100%' , justifyContent:'center'}}>
                <div style={{width:'max-content' , gap:'1rem'}}>
            <img  className='logImage credential'  src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" />
            <input className="credential" type="text" name="email" placeholder="Email" onChange={dataset} />
            <input className="credential" type="Password" name="password" placeholder="Password" onChange={dataset} />
               </div>
           </div>
           <div>
       <div className="credential">
       <button className="button" style={{width:'16rem'}} onClick={handleSignUP}>Login</button>
       </div>
       <div className="credential">
       <NavLink to='/signup'><button className="button" style={{width:'16rem'}}>Sign Up / New User</button></NavLink>
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