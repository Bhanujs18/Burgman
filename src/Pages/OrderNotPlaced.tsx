import { useSelector } from "react-redux";
import styled from "styled-components"

const Wrapper = styled.section`

display: block;
width: 100%;
justify-content: center;


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
justify-content: center;

.order_div{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem;
   
    color: black;
    width:60%;
    
.order_placed_details{
    display: block;
    align-items: center;
    gap: 1rem;
     .order_placed_img{
       
            height: 17rem;
            width: 30rem;
                      }
                     }
                    }
                }

                @media(max-width:1256px){
                    font-size: 0.9rem;
                    .order_placed_div{
                        .order_div{
                            display: block;
                            align-items: center;
                            box-shadow: none;
                            .order_placed_details{
                                
                                display: flex;
                                justify-content: center;
                            }
                            .details{
                                text-align: center;
                            }
                        }
                    }
                }

`

const OrderNotPlaced = () => {
    const products = useSelector((store:any) =>store.menu.cart) 
    const qty = products;
    const totalqty:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=cur.quantity,0);
    const totalamt:number =  qty.reduce((accumulator:number , cur:any)=> accumulator+=((cur.product.price)*cur.quantity),0);
    console.log(totalamt);
  return (
    <Wrapper>
          <div className="order_heading">
            <img className="tick" src="https://cliply.co/wp-content/uploads/2021/07/372107370_CROSS_MARK_400px.gif" />
            Order Not Placed
          </div>
           <p style={{textAlign:'center'}}>O👀ps.. Failed</p>
          <div className="order_placed_div">
             <div className="order_div">
                <div className="order_placed_details">
                  <img className="order_placed_img" src="https://cdn3d.iconscout.com/3d/premium/thumb/sad-robot-9580026-7746762.png" />
                </div>
         <div className="details">
         <p>Total qty = {totalqty} units</p>
         <p>Total Amount = Rs {totalamt}/-</p>
         <p>Tax 5% = Rs {Math.round(0.05*totalamt)}/-</p>
         <hr />
         <p style={{color:'red'}}>Pending = Rs {totalamt+(Math.round(0.05*totalamt))}/-</p>
         <hr />
      
        </div>
        </div>
          </div>
    </Wrapper>
  )
}

export default OrderNotPlaced
          