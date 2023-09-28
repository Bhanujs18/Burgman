import styled from "styled-components";

const Wrapper = styled.section`
display: flex;

justify-content: center;
align-items: center;
.credential{
    display: block;
    margin: 2rem;
    text-align: Center;
}
.logImage{
    height: 15rem;
    width: 15rem;
    align-items: center;
    border-radius: 50%;
    background-color: green;
}
`

const SignUp = () => {
  return (
    <Wrapper>
        <div>
      
        <div style={{display:'block'}}>
        <img  className='logImage credential'  src="https://www.bluetissuemexico.com/img/inicia-sesion.gif" />
       <input className="credential" type="text" placeholder="Name"  />
       <input className="credential" type="Password" placeholder="Password" />
       <div className="credential">
       <button style={{display:'flex'  , justifyContent:'center' , width:'100%'}} >Sign Up</button>
       </div>
       </div>
       </div>
    </Wrapper>
  )
}

export default SignUp;