import { getAuth, signOut, updateProfile } from "firebase/auth"
import styled from "styled-components"
import { auth } from "../firebaseAuth/firebase"
import { useState } from "react"

const Wrapper = styled.section`
display: flex;
justify-content: center;

margin-top: 1rem;
text-align: left;
padding: 1rem;
.div{
    gap: 1rem;
    display: flex;
    align-items: center;
    .navbar_link{
        color: white;
        background-color: green;
        text-decoration: none;
        border-radius: 10px;
        padding: 1rem;
       cursor: pointer;
       transition: all 0.5s ease;

    }
    .navbar_link:hover{
        background-color: black;
        transition: all 0.5s ease;
    }
.img{
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px green solid;
}
}

@media(max-width:950px){
display: flex;
margin: 0rem;
justify-content: center;
text-align: center;
padding: 1rem;
.div{
    display: block;
.img{
    height: 12rem;
    width: 12rem;
}
}
}
`

const UserDetails = ({user} : any) => {


    const [consent , setConsent] = useState(false);
    const logout = () =>{
        signOut(auth);
      }


const [link , setlink] = useState('');
const uploadphoto = (e:any) => {
const data = e.target.value;
if(!data){
    alert("Invalid image url");
    console.log("error");
    return;
}
else{
    setlink(data);
}

}

const update = ()=> {
const auth = getAuth();
updateProfile(auth.currentUser as any ,{
   photoURL: (!link) ? null : link,
})
window.location.reload();
}  
return (
    <Wrapper>
        <div className="div">
    <div>
        <div style={{display:'flex' , justifyContent:'center'}}>
        <img className="img" src={user.photoURL} />
        </div>
        <p className="update_profile_pic" onClick={()=>setConsent(true)}>Update Profile Picture</p>

{(consent)? 
        <div className="set_dp_div" >
        <div className="set_dp">
        <input placeholder="image_url" type="text" onChange={uploadphoto} />
        <button onClick={update}>Update</button>
        <div>
            <button style={{backgroundColor:'red'}} onClick={()=>setConsent(false)}>Cancel</button>
        </div>
        </div>
        </div>
:
null}

    </div>
    <div> 
        <div>Hey, {user.displayName}</div>
        <div>{user.email}</div>
        <div style={{fontSize:"0.7rem"}}><i>Authenticated by </i>{user.providerId}</div>
    </div>
    <p  className='navbar_link' onClick={logout}>logout</p>
       </div>
    </Wrapper>
  )
}

export default UserDetails