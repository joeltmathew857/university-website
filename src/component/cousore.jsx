import React,{usestate,useffect, useEffect} from 'react'


function app() {

  const [name,setName]=usestate('joel')
  const [count,setcount]=usestate(0)
  
  const changingName=()=>{
   setName("thomas");

  }
  const increment=()=>{
    setcount(count+1)
  }

  useEffect (()=>{
    onslotchange.log("changed value" )
  })

  return (
    <div>
  
  <button onClick={changingName}>change name</button>
  <button onClick={increment}>increment</button>


    </div>
  )
}

export default cousore
