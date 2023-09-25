import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
     name: "menu",
     initialState : {
        products: [],
        quantity:0,
        cart :  [],
     },

    // Reducers (Actions)
    reducers: {
        updatemenu:(state , action) => {
         state.products = action.payload;
         },

         addtocart:(state , action) =>{
        let { product , quantity} = action.payload;
        const exist = state.cart.find((cur)=>cur.product.id == product.id)
        if(exist){
        console.log("exist")
        }
        else{
            console.log("not exist")
            state.cart.push(action.payload)
        }
       },
       removeitem:(state , action) => {
        console.log(action.payload)
       const newcart =   state.cart.filter((curItem) => curItem.product.id !== action.payload);
       state.cart = newcart;
       }
    },
});

export const { updatemenu , addtocart  , removeitem} = menuSlice.actions;
export default menuSlice.reducer;