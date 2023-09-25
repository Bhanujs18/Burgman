import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
     name: "menu",
     initialState : {
        products: [],
        quantity:0,
      },

    // Reducers (Actions)
    reducers: {
        updatemenu:(state , action) => {
         state.products = action.payload;
         }
       
    },
});

export const { updatemenu } = menuSlice.actions;
export default menuSlice.reducer;