import React from 'react'
import image from '../assets/Image.png'

function Home() {
  return (
    <div className='flex items-center justify-center'>
      <img className='w-[50%]' src='https://miro.medium.com/v2/resize:fit:1000/1*wQ5SsWOSoTFRjlnFYXPOiA.png' />
      <img className='w-[50%]' src={image}/>
    </div>
  )
}

export default Home