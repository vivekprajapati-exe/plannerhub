import React, { useState , useEffect } from 'react'
import './Pomodoro.css'

export default function Pomodoro() {
    const [minutes , setMinutes] = useState("25")
    const [seconds , setSeconds] = useState("00")
    const [isActive , setIsActive] = useState(false)

  useEffect(()=>{
    let timeout;
    if(isActive){   
      timeout = setTimeout(() => {
        if(seconds == "00" ){
          if(minutes =="00"){
            clearTimeout(timeout)
            setIsActive(false)
          }else{
            setMinutes((prevmin)=> (prevmin - 1))
            setSeconds("59")
          }
        }else{
          if(seconds < "10"){
            setSeconds((prevsec)=>{
              return( "0", prevsec -1)
            })
          }else{
            setSeconds((prevsec)=>(prevsec -1))
          }
        }
        
      }, 1000);
    }else{
      clearTimeout(timeout)
    }
    return () => clearTimeout(timeout); 
    
    
  },[isActive , minutes , seconds])

  const startTimer = ()=>{
    setIsActive(true)
  }
  const pauseTimer = ()=>{
    setIsActive(false)
  }
  const resetTimer = ()=>{
    setIsActive(false)
    setMinutes("25")
    setSeconds("00")
  }

  return(
    <>

    <div className="pomowrapper">
      <div className="timerdisplay">
        <div className='montserrat timer'>
          <h1 className='p-2'>{(minutes)}</h1>
          <h1>:</h1>
          <h1 className='p-2'>{(seconds)}</h1>
        </div>
      </div>
      <div className="btn-wrapper">
        <button className='border-2 border-x-white montserrat text-white p-4 rounded-xl text-xl' onClick={startTimer}>Play</button>
        <button className='border-2 border-x-white montserrat text-white p-4 rounded-xl text-xl' onClick={pauseTimer}>Pause</button>
        <button className='border-2 border-x-white montserrat text-white p-4 rounded-xl text-xl' onClick={resetTimer}>Reset</button>
      </div>
      
    </div>
    
    </>
  )
}
