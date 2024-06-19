import React, { useEffect } from 'react'
import { getProducts } from '../store/reducer/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../store/actions/ProductAction'

function Product() {

  const {products} = useSelector((state) => state.ProductReducer)
  console.log(products)

  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(getProducts())
    dispatch(asyncGetProducts())
  },[])

  return (
    <div className='m-auto container p-10 mt-5 bg-green-100'>
      <h1 className="text-2xl font-bold text-green-400">Product List</h1>
      <h3 className="text-2xl font-bold text-red-600">Getting Data Through API</h3>
      <ul>
        {products.map((product, index) => {
          return <li key={index}>
            <h4>{product.title} </h4>
          </li>;
        })}
      </ul>
    </div>
  )
}

export default Product