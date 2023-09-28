import {FaTruckMoving} from 'react-icons/fa';
import { styled } from 'styled-components';
import {AiFillLock} from 'react-icons/ai'; 
import {BiTimer} from 'react-icons/bi';
import {BiSolidCheckShield} from 'react-icons/bi'

const Wrapper = styled.section`
background-image: url("./logo/4.jpg");
font-size: 1rem;
width: 100%;
display: flex;
justify-content: center;
.hero2div{

display: flex;
flex-direction: row;
justify-content: center;
color: green;
align-items: center;

.heroSection-1-grids{
padding: 1rem;
width:15rem;
  
border-radius: 4%;
align-items: center;
color: white;

.icons{
    width:100%;
    display: flex;
    justify-content: center;
}
}
}

@media (max-width : 960px){
display: block;
align-items: center;
background-image: none;
color: green;
.hero2div{
  display: block;
  justify-content: center;
  font-size: 1rem;
  color: green;
  .heroSection-1-grids{
    width: 100%;
    
    .icons{
      width: 100%;
      text-align: center;
       color: green;
    }
}
}
`

const HomeSection1 = () => {
   
  return (
    <Wrapper>
      <div className='hero2div'>
           <div className='heroSection-1-grids'>
            <p className='icons'><FaTruckMoving /></p>
           <p className='icons'>Fastest and Secured Delivery</p>
           </div >
             <div  className='heroSection-1-grids'>
             <p className='icons'><BiSolidCheckShield /></p>
               <p className='icons'>Non-Contact Shipping</p>
             </div>
             <div  className='heroSection-1-grids'>
             <p className='icons'><BiTimer /></p>
              <p className='icons'>15 Days Return Policy</p>
              </div>
          <div className='heroSection-1-grids'>
          <p className='icons'><AiFillLock /></p>
          <p className='icons'>We Secure your data</p>
         </div>
      </div>

    </Wrapper>
  )
}

export default HomeSection1;