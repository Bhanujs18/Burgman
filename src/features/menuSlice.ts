import { createSlice } from "@reduxjs/toolkit";

const localStorageCart=()=>{
    let newcart:any = localStorage.getItem("cartStorage");
    const parsedata = JSON.parse(newcart);
    if(!Array.isArray(parsedata)) return [];
    return parsedata;
    };

    const menuStorageCart=()=>{
        let newcart:any = localStorage.getItem("menu");
        const parsedata = JSON.parse(newcart);
        if(!Array.isArray(parsedata)) return [];
        return parsedata;
        };
    



const menuSlice = createSlice({
     name: "menu",
     initialState : {
        products: menuStorageCart(),
        quantity:0,
        cart : localStorageCart(),
        totalquantity: 0,
     }, 

    // Reducers (Actions)
    reducers: {
        updatemenu:(state , action) => {
         state.products = action.payload;
         localStorage.setItem("menu" , JSON.stringify(state.products));

         },

         addtocart:(state , action) =>{
        let { product , quantity} = action.payload;
        const exist = state.cart.find((cur:any)=>cur.product.id == product.id)
        if(exist){
        console.log("exist")
        state.cart.map((curItem:any) => {
            
            if(curItem.product.id === product.id){
               let newvalue = quantity;
               curItem.quantity = newvalue;
               return curItem;
            }
            return action.payload;
        });
        }
        else{
            console.log("not exist")
            state.cart.push(action.payload);
        }
        localStorage.setItem("cartStorage" , JSON.stringify(state.cart));

       },
       removeitem:(state , action) => {
        console.log(action.payload)
       const newcart = state.cart.filter((curItem:any) => curItem.product.id !== action.payload);
       state.cart = newcart;
       localStorage.setItem("cartStorage" , JSON.stringify(state.cart));
      
    //    totalItem:(state) => {
        // const qty:number = state.cart.reduce((initial:number , curItem:any) => {
        //     initial = initial + curItem.quantity;
        //     return initial;   
        //    },0)
        //    state.cart.totalquantity = qty;
        //    },
         },
    },
});

export const { updatemenu , addtocart  , removeitem} = menuSlice.actions;
export default menuSlice.reducer;