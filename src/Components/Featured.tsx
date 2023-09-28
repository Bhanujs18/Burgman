
import { useSelector } from 'react-redux';
import Card from '../Components/Card';




const Featured =  () => {

 
  
  const products = useSelector((store:any) =>store.menu.products) 
  return (
 <div style={{width:'100%'}}>
  <img className='menu_banner' src='./logo/6.png' />
  <p className='todays_special'>Today's Special</p>
    <div className='card_div_special'> 
        <Card product={products[13]} />
        <Card product={products[9]} />
        <Card product={products[3]} />
        <Card product={products[7]} />
    </div>
    </div>

  )
}

export default Featured;