import React from 'react'

const Control = ({control: {info1, info2, info3}}) => {
  return (
    <div className='control-wrap'>
        <h4>Name</h4>
        <p className={info1 ? "check" : null} >Min 5characters</p>
        <h4>Password</h4>
        <p className={info2 ? "check" :null}> Min 5 characters</p>
        <p className={info2 ? "check" :null}> Max 15 characters</p>
        <p className={info3 ? "check" :null}> Not equal each other</p>
    </div>
  )
}

export default Control
