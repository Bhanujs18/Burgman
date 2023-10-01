import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseAuth/firebase";

const Wrapper = styled.section`
display: flex;
background-image: url('https://i.pinimg.com/736x/86/66/1c/86661cf49e8be271efb9cf939d9e932e.jpg');
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
    }
}
`

const Login = () => {
    
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
            // localStorage.setItem("islogin?" , JSON.stringify(true));
            setError("Logged In SucessFully");
            window. location. reload();

        }).catch((error)=>{
            setError(error.message);
            alert("SignUp First !!!");
            // localStorage.setItem("islogin?" , JSON.stringify(false));
        })

        }
    }
  return (
    <Wrapper>
        <div>
      
        <div className="div">
        <div className="signup">
                <p>Login</p>
            </div>
        <img  className='logImage credential'  src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" />
       <input className="credential" type="text" name="email" placeholder="Email" onChange={dataset} />
       <input className="credential" type="Password" name="password" placeholder="Password" onChange={dataset} />
       <div className="credential">
       <button className="button" style={{width:'100%'}} onClick={handleSignUP}>Login</button>
       </div>
       <p style={{color:'white' , textAlign:'center'}}>{error}</p>
       <div className="credential">
       <NavLink to='/signup'><button className="button" style={{width:'100%' , backgroundColor:'grey'}}>Sign Up / New User</button></NavLink>
       </div>
       {/* <div style={{fontSize:'1.2rem'}}>
       <NavLink to="/signup" style={{textDecoration:'none'}}><p style={{color: 'white' , textDecoration:'none', textAlign:'center' , WebkitTextStroke:'0.4px black' }}>New User? <span style={{color:'green'}}><i>Sign Up here</i></span></p></NavLink> */}
       </div>
       </div>
      
    </Wrapper>
  )
}

export default Login;