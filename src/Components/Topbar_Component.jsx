import React from 'react'
import { Logo_component } from './Logo_Component'
import { Delivery_Component } from './Delivery_Component'
import { Input_Component } from './Input_Component'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export const Topbar_Component = () => {
  return (


    <div className='bg-yellow flex justify-between items-center gap-3 '>
      <div className='col-span-1'>
      <Logo_component />
      </div>
      <div className='col-span-1'> <Delivery_Component /></div>
      <div className='col-span-6'>
        <Input_Component />
      </div>
      <div className='col-span-1'>
        <p>Language</p>
      </div>
      <div className='flex border-l-4 px-4'>
        <span className='px-2'>Login</span>
        <img src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="Login" width={"20px"} height={"30px"} ></img>
      </div>
      <div className='flex border-l-4 px-4'>
      <span className='px-2'>Whishlist</span>
      <CiHeart />
      </div>
      <div className='flex gap-2 border-l-4 px-4'>
      <span className='px-2'>Cart</span>
      <IoCartOutline width={"30px"} height={"20px"} />
      </div>
      
      
      
     
      
      </div>
  )
}
