
import React from 'react'

const Form = () => {
  return (
    <div className='form-wrap'>
        <h4 className='form-title'>Login</h4>
        <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Surname' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Password Again' />
        </form>
        <button>Giriş Yap</button>
      
    </div>
  )
}

export default Form
