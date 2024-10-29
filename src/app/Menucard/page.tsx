export const metadata ={
    title: "Home:BAKESTRY"
  }
  import Image from "next/image"
  
  export default function Home() {
    return(
      <div>
      <h1 className="text-2xl text-red-950 h-auto text-align:middle">WELCOME TO BAKISTRY MENUCARD</h1>
      <div className='flex items-center space-x-2 mb-4 sm:mb-0'>
    <img src="background1.jpg" alt='background1'
          className='align-bottom'/>
    <img src="background2.png" alt='background2'
          className='align-middle'/>
  
    </div>
    </div>
    )}