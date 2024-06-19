import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Product from './components/Product'

export default function App() {
  return (
    <div className='w-screen h-screen'>
        <nav className='p-5 flex justify-center gap-10 bg-zinc-100 text-zinc-500 font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/products">Products</Link>
        </nav>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/users' element = {<User/>} />
            <Route path='/products' element = {<Product/>} />

        </Routes>
    </div>
  )
}
