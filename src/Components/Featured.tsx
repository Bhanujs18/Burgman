




const Featured =  () => {
  return (
 <div style={{width:'100%'}}>
  <img className='menu_banner' src='./logo/6.png' />
  <p className='todays_special'>Today's Special</p>
    <div className='card_div_special'> 
       <div className="spl_card">
         <img className="special_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b6de81ce385a17c9f4e54315e739cd19" />
             <div>
                <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <img className="categoryfood" src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" />
                BurgMan Special
                </div>
             <p>Only @99/-</p>
             </div>
       </div>
       <div  className="spl_card">
       <img className="special_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zmn1fymdtkprk5vlkud1" />
       <div>  
                <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <img className="categoryfood" src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" />
                Combo
                </div>
             <p>Only @99/-</p>
             </div>
       </div>
       <div  className="spl_card">
       <img className="special_img" src="https://b.zmtcdn.com/data/dish_photos/cc6/7982d2af03dece4b6f58a66ecb208cc6.jpg" />
       <div>
                 <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <img className="categoryfood" src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" />
                Free Hit
                </div>
             <p>Only @99/-</p>
             </div>
       </div>
    </div>
    </div>

  )
}

export default Featured;