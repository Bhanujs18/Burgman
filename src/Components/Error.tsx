import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.section`
padding: 4rem;
display: block;
font-size: 2rem;
align-items: center;
text-align: center;
.error-btn{
    margin-top: 1rem;
    padding: 0.7rem 4rem;
    font-size: 1.2rem;
    background-color: green;
    border: none;
    color: white;
}
.img{
    height: 20rem;
    width: 26rem;
}

@media(max-width:600px){
    font-size: 1.3rem;
    .img{
        height: 13rem;
        width: 15rem;
    }
    .error-btn{
        margin-top: 1rem;
        padding: 0.4rem 3rem;
        font-size: 1rem;
        
    }
}

`

export const Error = () => {
  
  return (
    <Wrapper>
        <p> O👀ps !! You are on wrong way...</p>
        <img className='img' src='https://i.imgur.com/ks9WhlU.gif' alt='error' />
        <br />
        <NavLink to='/' ><button className='error-btn'>Home</button></NavLink>
    </Wrapper>
  )
}
export default Error;