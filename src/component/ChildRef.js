import React from 'react'

const ChildRef=React.forwardRef((prop ,ref)=>{
  return (
    <div>
        <input  ref={ref} type="text"></input>
    </div>
  )
}
)
export default ChildRef