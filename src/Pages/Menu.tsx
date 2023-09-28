
import { useSelector } from 'react-redux';
import Card from '../Components/Card';




const Menu =  () => {

 
  
  const products = useSelector((store:any) =>store.menu.products) 
  return (
 <div style={{width:'100%'}}>
  <img className='menu_banner' src='./logo/6.png' />
    <div className='card_div'> 
      {products.map((product:any, index:any)=>{
       return( 
       <Card key={index} product={product} />
      )}
      )}
    </div>
    </div>

  )
}

export default Menu