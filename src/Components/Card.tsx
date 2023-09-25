import { useState } from "react";
import styled from "styled-components";
import {AiFillMinusSquare , AiFillPlusSquare} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addtocart } from "../features/menuSlice";

const Wrapper=styled.section`

  .card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;

    .img_and_price{
    display: flex;
    gap: 0.2rem;
  
    
    .nameandicon{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        justify-content: left;
     }

    .addtocart{
        display:flex;
        gap: 0.4rem;
        align-items: center;
        padding: 0.4rem;
    }
    }
    
  }

`

const Card = ({product}:any) => {

  const dispatch = useDispatch();

const [display , setDisplay] = useState(false); 
const [quantity, setQuantity] = useState(0);

   const {name , img , price, category , id} = product;

   const data = (product:any , quantity:number) => {
     setDisplay(true);
     const arr = { product , quantity};
     dispatch(addtocart(arr))
   }

   const add = () => {
    setQuantity(quantity+1);
    data(product , quantity);
   }
   const sub = () => {
    setQuantity(quantity-1);
     data(product , quantity);
   }

  return (
    <Wrapper>
    <div className='card'>
         

        <div className="img_and_price">
           <img src={img} alt={name}  style={{height: '10rem' , width:'9rem'}}/>
           <div>
           <div className="nameandicon">
              <img src={category} style={{height: "1rem" , width: "1rem"}}/>
              <div style={{display:'flex', alignItems:'center'}}>{name}</div>
         </div>
           <p>Price : Rs.{price}/-</p>
             <div style={{color: "green" , display: "flex" , gap:"0.4rem" , alignItems:'center'}}>
             <div>
            {(display!=true) ? 
            <div className="addtocart" onClick={()=>data(product , quantity)} style={{cursor:'pointer'}}> Add to cart </div> : 
            <div className="addtocart">
            <AiFillMinusSquare onClick={sub}/>
            {quantity}
            <AiFillPlusSquare onClick={add} /> 
            </div> }
        </div>
       </div>
       </div>
        </div>
   </div>
   </Wrapper>
  )
}

export default Card