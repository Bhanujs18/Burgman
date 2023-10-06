import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addtocart, removeitem } from "../features/menuSlice";
import {AiFillDelete} from 'react-icons/ai';
import {AiFillMinusSquare , AiFillPlusSquare} from 'react-icons/ai';
import { useState } from "react";

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
    
    .remove{
      color: white;
      display: flex;
      align-items:center;
      justify-content:center;
      background-color:red;
      cursor:pointer;
      width: 6rem;
      height:10rem;
    }
    .img{
      height: 10rem;
      width: 9rem;
    }

    .cartdetails{
      display: block;
      padding: 1rem;
      text-align: left;
     
      .addtocarticon{
        display: flex;
       align-items: center;
       gap: 0.5rem;
      font-size: 1.1rem;
       color: green;
       justify-content: baseline;
      
    }
    }
  
    }
    
  }


  @media(max-width:600px){
    
    .Cartcard{
      height: 5rem;
  
      .img_and_price{
        .remove{
          height: 5rem;
          width: 3rem;
          background: white;
          color: red;
        }
       
        .img{
          height: 5rem;
          width: 5rem;
        
        }
  
  
      .cartdetails{
        font-size: 0.8rem;
        padding: 0.2rem;
        width: 100%;
      
      .totalprice{
        display: none;
      
    }
      
      }
    }

  }

`

const Card = ({product , qty}:any) => {

  const dispatch = useDispatch();

   const {name , img , price , id} = product;

   const remove = (id:number) => {
    dispatch(removeitem(id));
   }



   const [quantity, setQuantity] = useState(qty);

   const data = (product:any , quantity:number) => {
    quantity < 0 ? 0 : setQuantity(quantity);
    const arr = { product , quantity};
    dispatch(addtocart(arr));
  }
 


  return (
    <Wrapper>
    <div className='Cartcard'>
        
        <div className="img_and_price">
              <div style={{display:'flex'}}>
                     <img src={img} alt={name}  className="img"/>
                          <div className="cartdetails">
                             <p>{name}</p>
                             <div className="addtocarticon">
                             <AiFillMinusSquare onClick={()=>data(product , quantity-1 )}/>
                             {quantity}
                             <AiFillPlusSquare onClick={()=>data(product , quantity+1)} /> 
                             </div>
                             <p className="totalprice">Total price: Rs. {(qty*price<0)? 0:qty*price}/-</p>
                             
                             
                          </div>
                          
              </div>
      
           <div onClick={()=>remove(id)}  className="remove"><AiFillDelete /></div>
        </div>
   </div >
   </Wrapper>
  )
}

export default Card