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
    background-color: green;
    color: white;
    width:60%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
.order_placed_details{
    align-items: center;
    gap: 1rem;
     .order_placed_img{
            height: 17rem;
            width: 30rem;
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
    const pay:number = totalamt+(Math.round(0.05*totalamt));

  return (
    <Wrapper>
          <div className="order_heading">
            <img className="tick" src="./logo/8.gif" />
            Order Placed
          </div>
           <p style={{textAlign:'center'}}>Your Order will be delivered S👀n</p>
          <div className="order_placed_div">
             <div className="order_div">
                <div className="order_placed_details">
                  <img className="order_placed_img" src="https://www.icegif.com/wp-content/uploads/spongebob-squarepants-krabby-patty.gif" />
                </div>
               <div>
         <p>Total qty = {totalqty} units</p>
         <p>Total Amount = Rs {totalamt}/-</p>
         <p>Tax 5% = Rs {Math.round(0.05*totalamt)}/-</p>
         <hr />
         <p>Paid = Rs {totalamt+(Math.round(0.05*totalamt))}/-</p>
         <hr />
      
        </div>
        </div>
          </div>
    </Wrapper>
  )
}

export default OrderPlaced