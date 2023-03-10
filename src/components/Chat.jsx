import React from 'react'

import { Messages } from './Messages';
import { Input } from './Input';

import More from "../assets/menu-dots.png";
import Cam from "../assets/video.png";
import Add from "../assets/user-add.png";


export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  )
}
