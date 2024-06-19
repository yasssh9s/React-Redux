import axios from "axios";
import { getProducts } from "../reducer/productReducer";

export const asyncGetProducts = () => async (dispatch, getState) => {
    // console.log(getState()) 
    // getState gives the current global state
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        // console.log(res.data)
        // here we have sync data of products
       dispatch( getProducts(res.data))

    }
    catch (error) {
        console.log(error)
    }
}


// HOF
// function a () {
//     return function() {

//     }
// }

// ()=> () => {}