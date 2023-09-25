import { createSlice, current } from "@reduxjs/toolkit";


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
        state.cart.map((curItem) => {
            
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
       const newcart =   state.cart.filter((curItem) => curItem.product.id !== action.payload);
       state.cart = newcart;
       }
    },
});

export const { updatemenu , addtocart  , removeitem} = menuSlice.actions;
export default menuSlice.reducer;