// import axios from 'axios';
// import { getDatabase } from 'firebase/database';
// import React, { useState } from 'react'

// const data = () => {

//     // const [sdata , setData] = useState();

//   const  url = "https://burgman-52a82-default-rtdb.firebaseio.com/:%22orders%22.json";

//   const data = async (url:string) =>{
//     // const res = axios.get(url);
//     // const newdata = (await res).data; 
//     // setData(newdata);
//     const db = getDatabase();
//     const ref = db.ref('server/saving-data/fireblog/posts');
//     console.log(db);
//     ref.on('value', (snapshot) => {
//           console.log(snapshot.val());
//         }, (errorObject) => {
//           console.log('The read failed: ' + errorObject.name);
//         }); 
//   }
// //   console.log(sdata);




// // Attach an asynchronous callback to read the data at our posts reference
// // 


//   return (
//     <div style={{paddingTop:'5rem'}}>
//        <button onClick={()=>data()}>magic</button>   
//     </div>
//   )
// }

// export default data