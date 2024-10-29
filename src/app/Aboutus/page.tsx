import React from 'react'
export const metadata ={
  title: "Home:BAKESTRY"
}

const page = () => {
  return (
    <div className="h-15 bg-gradient-to-r from-red-400 to-yellow-200"> 
        <h1 className='text-2xl text-white'>About us</h1>
        <p className='text-1xl text-yellow-100'>Lorem ipsum dolor sit, amet consectetur
           adipisicing elit.<br></br>
           Aspernatur quaerat quasi aliquid
           <br></br>
            magni nesciunt amet praesentium 
           laudantium accusamus <br></br>
          animi eum debitis, rem deleniti vitae 
          necessitatibus corporis. <br></br>
          
          Officiis saepe facilis dolores.</p>
          <br></br>
          <br></br>
          <h2 className='text-2xl text-white'>our services</h2>
          <p
          className='text-1xl text-yellow-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>Consequatur, ipsa cumque nam soluta, exercitationem mollitia<br></br> ab earum sapiente doloribus aspernatur<br></br> numquam voluptate corporis omnis voluptas minima? Numquam assumenda veniam fugit.</p>
    </div>
  )
}

export default page