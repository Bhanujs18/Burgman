import { signOut } from "firebase/auth"
import styled from "styled-components"
import { auth } from "../firebaseAuth/firebase"

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
        padding: 1rem;
       cursor: pointer;
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
    const logout = () =>{
        signOut(auth);

      }
  return (
    <Wrapper>
        <div className="div">
    <div>
        <img className="img" src={user.photoURL} />
        
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