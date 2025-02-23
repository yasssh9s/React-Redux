import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
}

export const ProductSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        getProducts : (state, action) => {
            // console.log(action)
            state.products = action.payload
        }

    },
})

export default ProductSlice.reducer
export const {getProducts} = ProductSlice.actions