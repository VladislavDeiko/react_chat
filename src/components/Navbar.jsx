import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">My Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/6908488/pexels-photo-6908488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John</span> 
        <button onClick={() => signOut(auth)}>logout</button>
      </div>

    </div>
  )
}
