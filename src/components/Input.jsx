import React from 'react'

import AddImg from "../assets/image.png";
import Attach from "../assets/attach-file.png";



export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: 'none'}} id="file" />
        <label htmlFor="file">
          <img src={AddImg} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
