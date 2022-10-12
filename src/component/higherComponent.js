import React from 'react'
import {useRef ,useState} from 'react'
function higherComponent() {
  return (
    <div>
        <Counter/>
    </div>
  )
}
export default higherComponent


 function Counter() {
    const [count,setCount]=useState(0)
  return (
    
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}></button>
    </div>
   
  )
}

