import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <header className='flex flex-row justify-between item-center bg-white text-black w-full p-2 '>
        <div>
            <h1 className='playfair-font'>Merlit-Candles</h1>

        </div>
        <div className='flex  p-2 gap-4'>
            <button onClick={()=>navigate('/trending')}>Trending</button>
            <button onClick={()=>navigate('/collections')}>Collections</button>
             <button onClick={()=>navigate('/contactus')}>Contact Us</button>
             <button onClick={()=>navigate('/privacy')}>privacy policy</button>
             <button>user</button>
        </div>
      
    </header>
  )
}

export default Navbar
