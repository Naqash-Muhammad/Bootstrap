import React from 'react'

const ChildCallBack = (props) => {
  return (
    <div>
        <button onClick={props.Increment}>Click Count</button>
    </div>
  )
}

export default ChildCallBack;