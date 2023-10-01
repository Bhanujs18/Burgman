import { useSelector } from "react-redux";
import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.section`
text-align: center;
padding: 1rem;
color: green;
font-size: 1.3rem;
.today{
  margin: 0rem;
}
@media(max-width: 644px){
  .today{
    font-size:
  margin-bottom: 1rem;
}}
`

const Featured =  () => {

  const products = useSelector((store:any) =>store.menu.products)  


  return (
 <Wrapper>
  <p className="today">Today's Special</p>
 <div className="card_div">
  <Card product={products[13]} />
  <Card product={products[9]} />
  <Card product={products[2]} />
  <Card product={products[1]} />
  <Card product={products[6]} />
  <Card product={products[3]} />
 </div>
 </Wrapper>   
  )
}

export default Featured;