import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeitem } from "../features/menuSlice";
import {AiFillDelete} from 'react-icons/ai';

const Wrapper=styled.section`

  .Cartcard{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: block;
    width: 100%;
    height: 10rem;

    .img_and_price{
    display: flex;
    gap: 0.2rem;
    justify-content: space-between;


    .cartdetails{
      displaY: block;
      padding: 1rem;
      
    }
  
    }
    
  }

`

const Card = ({product , qty}:any) => {

  const dispatch = useDispatch();

   const {name , img , price, category , id} = product;

   const remove = (id:number) => {
    dispatch(removeitem(id));
   }

  return (
    <Wrapper>
    <div className='Cartcard'>
        
        <div className="img_and_price">
           <div style={{display:'flex'}}>
           <img src={img} alt={name}  style={{height: '10rem' , width:'9rem'}}/>
              <div className="cartdetails">
                 <p>Name: {name}</p>
                 <p>Quantity: {qty}</p>
                 <p>Total price: {qty*price}</p>
              </div>
           </div>
      
           <p onClick={()=>remove(id)} style={{color: "white" , display: "flex" ,alignItems:'center',  justifyContent:'center' , backgroundColor:'red' , cursor:'pointer' , width: '6rem' , height:'10rem'}}><AiFillDelete /></p>
        </div>
   </div >
   </Wrapper>
  )
}

export default Card