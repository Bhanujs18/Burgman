
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseAuth/firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Wrapper = styled.section`
display: flex;
background-image: url('https://res.cloudinary.com/dyqynjew8/image/upload/v1699076264/Screenshot_2023-11-04_110719_phu4xk.png');
background-position: inherit;
background-repeat: no-repeat;
justify-content:Center;
align-items:Center;
padding: 2rem 0rem;
background-size: cover;
  width: 100%;
//   background-color: grey;
background-position: top;
align-items: center;
.div{
    display: block;
    background-color: rgb(255,255,255,0.3);
    border-radius: 15px;
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
    border-radius: 5px;
    border: none;
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
   
    const [error , setError] = useState("");
    const navigate = useNavigate();
    const [values , setValues] = useState({
        name:"",
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
        const { name , email  , password} = values;
        if(!name || !email  || !password){
            setError("Fill all the Fields!!!");
            return;
        }
        else{
        setError(" ");
        createUserWithEmailAndPassword(auth , email , password).then((res) =>
        {
            setError("Signe Up SucessFully");
            alert("Signed Up Sucessfully");
            navigate("/login");
            const user = res.user;
            updateProfile(user ,{
                displayName:name,
                photoURL:"https://images.news18.com/ibnlive/uploads/2023/04/john-cena-birthday.jpg",
            })
            console.log(res);
        }).catch((error)=>{
            setError(error.message);
        })

        }
    }
                

    return (
    <Wrapper>
        <div>
        <div className="div">   
        <div className="loginBox">
        <div>
            <div style={{width:'100%' , display:'flex' , justifyContent:'center'}}>       <div style={{width:'max-content'}}>
       <img  className='logImage credential'  src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" />
       <div>
       <input className="credential" name="name" type="text" placeholder="Name"  onChange={dataset} />
       </div>
       <input className="credential" name="email" type="text" placeholder="Email" onChange={dataset} />
       <input className="credential" name="password" type="Password" placeholder="Password" onChange={dataset} />
       <p className="error">{error}</p>
       </div>
      
       </div>
 
       <div className="login_buttons">
       <button className="button" style={{width:'12rem'}} onClick={handleSignUP}>Sign Up</button>
       <NavLink to='/login'><button className="button" style={{width:'12rem'}}>Login</button></NavLink>
       </div>
       </div>
       </div>
       </div>
       </div>
    </Wrapper>
  )
}

export default SignUp;