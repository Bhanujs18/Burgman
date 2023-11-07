import { useSelector } from "react-redux";
import styled from "styled-components"
import MenuHeader from "../Components/MenuHeader";
import Countdown from "react-countdown";

const Wrapper = styled.section`

display: block;
width: 100%;
justify-content: center;
background-color: White;
// background-color: black;
color: black;

.order_heading{
    padding: 2rem;
    display: flex;
    align-items: center;
    gap:1rem; 
    justify-content: center;
    width: 100%;
    .tick{
       height: 3rem;
       width: 3rem;
       
    }
}

.order_placed_div{
display: flex;
width: 100%;
justify-content: space-around;

.order_div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    border-radius: 15px;
    overflow:hidden;
    margin: 2rem;
    // background-color: #E7E7E7;
    color: green;
    width:60%;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
.order_placed_details{
    display: grid;
    align-items: center;
    gap: 1rem;
   
     .order_placed_img{
             display: flex;
            height: 17rem;
            width: 8rem;
                      }
                      .time{
                        font-family: 'Luckiest Guy', cursive;
                        letter-spacing: 2px;
                        text-align:Center;
                        font-size: 1.5rem;
                      }
                     }
                     .details{
                        background-color: rgb(1,2,3,0.1);
                        padding: 2rem;
                        border-radius: 9px;
                     }
                     .details p{
                       
                        font-family: 'Luckiest Guy', cursive;
                          letter-spacing: 2px;
                     }
                    }
                }

                @media(max-width:600px){
                    font-size: 0.9rem;
                    .order_placed_div{
                        .order_div{
                            display: block;
                            align-items: center;
                            width: 100%;
                            background-color: white;
                            box-shadow: none;
                            .details{
                                width: 90%;
                                padding-top: 1rem;
                                text-align: center;
                                .paid{
                                    color: green;
                                }
                            }
                        }
                    }
                }

`

const OrderPlaced = () => {
    const products = useSelector((store:any) =>store.menu.cart) 
    const qty = products;
    const totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
    const totalamt:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=((cur.product.price)*cur.quantity),0);
    console.log(totalamt);
   

  return (
    <Wrapper>
        <MenuHeader text={"Order PLaced"} />
          <div className="order_placed_div">
             <div className="order_div">
                <div className="order_placed_details">
                                           <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                            <img className="order_placed_img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1699385996/juicy-rocket_um3vuf.gif" />
                                            </div>

                    <Countdown className="time" autoStart date={Date.now() + 10000000} />
                </div>
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>

         <div className="details">
         <p> Order Details</p>
         <p>Total qty = {totalqty} units</p>
         <p>Total Amount = Rs {totalamt}/-</p>
         <p>Tax 5% = Rs {Math.round(0.05*totalamt)}/-</p>
         <hr />
         <p className="paid">Paid = Rs {totalamt+(Math.round(0.05*totalamt))}/-</p>
         <hr />
         </div>

        </div>
        </div>
          </div>
    </Wrapper>
  )
}

export default OrderPlaced


