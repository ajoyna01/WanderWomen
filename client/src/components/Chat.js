import React from 'react'

function Chat({name, message, profilePic, timstamp}) {
  return (
    <div className="chat">
      <Avatar className="chat_image" alt={name} src={profilePic}/>
    </div>
  )
}

export default Chat
