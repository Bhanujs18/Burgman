import { useState } from "react";
import styled from "styled-components";
import {AiFillMinusSquare , AiFillPlusSquare} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addtocart } from "../features/menuSlice";


const Wrapper=styled.section`

  .card{
    color: white;
    border: 2px green solid;
    background-color: green;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    overflow: hidden;
    height: 10rem;
    border-radius: 12px;
    .img_and_price{
    display: flex;
    gap: 0.2rem;
     
    .nameandicon{
       display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.8rem;
        
        padding-top: 1rem;
        padding-left: 1rem;
        justify-content: left;
     } 

    .addtocart{
        display:flex;
        gap: 0.4rem;
        color: white;
        align-items: center;
        padding: 0.1rem;
    }
    .addtocarticon{
      display: flex;
     align-items: center;
     gap: 0.5rem;
     color: white;
    font-size: 1.1rem;
    }
    }
    
  }

  @media(max-width: 1126px){
    .card{
      .img_and_price{
      .nameandicon{
        font-size: 0.7rem;
      }
      .addtocart{
        font-size: 0.7rem;
      }
      .addtocarticon{
        display: flex;
       align-items: center;
       gap: 0.4rem;
      font-size: 0.9rem;
      }
    }
  }
  }

  @media(max-width:644px){
    .card{
      .img_and_price{
      .nameandicon{
        font-size: 0.8rem;
      }
      .addtocart{
        font-size: 0.8rem;
      }
      .addtocarticon{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
      }
    }
  }
  }
  }

`

const Card = ({product}:any) => {

  const dispatch = useDispatch();

const [display , setDisplay] = useState(false); 
const [quantity, setQuantity] = useState(1);

//  interface Product {
//     id: number,
//     price: number,
//     img: string,
//     stock: number;
//     name: string,
//     category:string,
//     rating:number,
//  }  



   const {name , img , price, category , rating}  = product;

   const data = (product:any , quantity:number) => {
     quantity < 0 ? 0 : setQuantity(quantity);
     setDisplay(true);
     const arr = { product , quantity};
     dispatch(addtocart(arr))
   }


  return (
    <Wrapper>
    <div className='card'>
         

        <div className="img_and_price">
                <img src={img} alt={name}  style={{height: '10rem' , width:'9rem'}}/>
                          <div>
                                 <div className="nameandicon">
                                    <img src={category} style={{height: "1rem" , width: "1rem"}}/>
                                    <div style={{display:'flex', alignItems:'center' ,letterSpacing:'0.7px',fontFamily:'Luckiest Guy, cursive', fontSize:'1.2rem'}}>{name}</div>
                                 </div>
                          <div className="nameandicon">
                           <p style={{letterSpacing:'0.7px',fontFamily:'Luckiest Guy, cursive', fontSize:'1rem'}}>Price : Rs.{price}/-</p>
                           <p style={{letterSpacing:'0.7px',fontFamily:'Luckiest Guy, cursive', fontSize:'1rem'}}> {rating}⭐</p>
                           </div>


             <div style={{color: "green" , alignItems:'center', paddingLeft:'1rem'}}>
            

            {(display!=true) ? 
            <div className="addtocart" onClick={()=>data(product , quantity)} style={{letterSpacing:'0.7px',fontFamily:'Luckiest Guy, cursive', fontSize:'1rem',cursor:'pointer'}}> Add to cart </div> : 
            <div className="addtocarticon" style={{letterSpacing:'0.7px',fontFamily:'Luckiest Guy, cursive', fontSize:'1.2rem'}}>
            <AiFillMinusSquare onClick={()=>data(product , quantity-1 )}/>
            {quantity}
            <AiFillPlusSquare onClick={()=>data(product , quantity+1)} /> 
            </div> }

            
            </div>
                                    </div>
                            </div>
            </div>
   </Wrapper>
  )
}

export default Card