import React from 'react';
import Logo from '../../assets/food-shop-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='shadow-md 
    bg-white 
    dark:bg-gray-800
    dark:text-white duration-300'>
    <div className='container py-3 sm:py-0'>
    <div className="flex justify-between items-center">
      <div>
        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
          <img src={Logo} alt="Foodie Zone" className='w-20'/>Brago Shop</a>
        </div>
          <div>
            <ul className='hidden'> 
              <li>
                <a href="#" className='inline-block py-4 px-4 hover:text-primary'
                >Home</a>
              </li>
              <li>
                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
              </li>
              <li>
                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
              </li>
            </ul>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2'>
              Order Now
              <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;
