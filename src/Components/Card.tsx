import { useState } from "react";
import styled from "styled-components";
import {AiFillMinusSquare , AiFillPlusSquare} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addtocart } from "../features/menuSlice";


const Wrapper=styled.section`

  .card{
    color: white;
    background-color: rgb(255,255,255,0.2);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;    overflow: hidden;
    height: 9rem;
    width: 24rem;
    border-radius: 18px;
    .img_and_price{
    display: flex;
    gap: 0.2rem;
     img{
      height:9rem;
       width:8rem;
     }
    .nameandicon{
       display: flex;
        
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

  
  @media(max-width: 410px){
    .card{
      display:block;
      width:20rem;
      height:15rem;
      padding:0;

      .img_and_price{
        display:flex;
        align-items:Center;
        padding:0;
        img{
          height:7rem;
           width:7rem;
         }
      .nameandicon{
        display:block;
        font-size: 0.7rem;
        
      }
      .addtocart{
        font-size: 0.7rem;
        padding:0;

      }
      .addtocarticon{
        display: flex;
       align-items: center;
       gap: 0.4rem;
       padding:0;

      font-size: 0.9rem;
      }
    }
  }
  }

    
  @media(max-width: 350px){
    .card{
      display:block;
      width:20rem;
      height:15rem;
      padding:0;

      .img_and_price{
        display:flex;
        align-items:Center;
        padding:0;
        img{
          height:7rem;
           width:7rem;
         }
      .nameandicon{
        display:block;
        font-size: 0.7rem;
        
      }
      .addtocart{
        font-size: 0.7rem;
        padding:0;

      }
      .addtocarticon{
        display: flex;
       align-items: center;
       gap: 0.4rem;
       padding:0;
      font-size: 0.7rem;
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
                <img src={img} alt={name}  />
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