import React from "react"
import "../styles/Chat.css"
import { Link } from "react-router-dom";


function Chat({first_name, message, image_url, timestamp}) {
  return (
    <Link to={`/chat/${first_name}`}>
    <div className="chat">
      <img className="chat_image" alt={first_name} src={image_url} />
      <div className="chat_details">
        <h2 className="h2"> {first_name} </h2>
        <p>{message}</p>
    </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat
