"use client";
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div > 
    
  <nav className='bg-red-600 text-white h-auto sm:h-12 md:h-16 lg:h-18 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
       <div className='flex items-center space-x-2 mb-4 sm:mb-0'>
        <img 
          src='logo1.png'
          alt='logo1'
          className='align-bottom'
          />
        
        <h1 className='text-lg sm:text-xl md:text-1xl lg:text-2xl font-bold'>
          <a ><Link href="/Main" className='hover:text-red-300'>Bakestry</Link></a></h1></div>
           
       <div className='w-full sm:w-auto mb-4 sm:mb-0'>
        <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
          <li><Link href="/Menucard" className='hover:text-red-300'> MenuCard</Link></li>

          <li><Link href="/Aboutus" className='hover:text-red-300'>About us </Link></li>

          <li><Link href="/Contactus" className='hover:text-red-300'>Contact us </Link></li>
        </ul>
       </div>
       <div className='w-full sm:w-auto'>
        <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
          <li><Link href="/login" className='hover:text-red-300'>login</Link></li>

          <li><Link href="signup" className='hover:text-red-300'>signup</Link></li>
        </ul></div>
        </nav>
        
        
        
        
        
        
        

       
       
      
      </div>
  
        
      
        
      
  )
}

export default Navbar