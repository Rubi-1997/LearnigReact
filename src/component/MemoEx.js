import React from 'react'

function MemoEx(props) {
    console.log("Memo called......")
  return (
    <div>MemoEx</div>
  )
}

export default React.memo(MemoEx)

