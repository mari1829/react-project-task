import React, { useEffect } from 'react'
import Parrent1 from './my-src/Parrent1'
import Form1 from './my-src/Form1'
import Login1 from './my-src/login1'
import { useState } from 'react'


export default function App() {
    const [open,setopen]=useState(false);
    
        const loginHandler=(mari)=>{
            setopen(mari);
        }
  return (
    <div className='container'>
        <h1></h1>
         {/* <Form1/>
         <Login1/> */}
         {!open && <Form1 triger={loginHandler}/>}
         {open && <Login1/>}
        {/* <Parrent1/> */}
       

    </div>
  )
}
