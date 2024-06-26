import React ,{useContext}from 'react'
import Cam from '../img/cam.png';
import More from '../img/more.png';
import Add from '../img/add.png';
import Input from './Input';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data} =useContext(ChatContext);

  return (
    <div className='chat'>
    <div className='chatInfo'>
      <span>{data.user?.displayName}</span>
      <div className='chatIcons'>
        <img src={Cam}alt="" />
        <img src={Add}alt="" />
        <img src={More}alt="" />
      </div>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat
