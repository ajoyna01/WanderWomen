import React from 'react';
import "../styles/Chat.css";
import Chat from './Chat'


function Chats() {
  return (
    <div className="chats">
      <Chat
        first_name= "Anna"
        message="Hi!"
        timestamp="40 seconds ago"
        image_url="https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512"
      />
      <Chat
        first_name= "Anna"
        message="Hi!"
        timestamp="40 seconds ago"
        image_url="https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512"
      />
      <Chat
        first_name= "Anna"
        message="Hi!"
        timestamp="40 seconds ago"
        image_url="https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512"
      />
      <Chat
        first_name= "Anna"
        message="Hi!"
        timestamp="40 seconds ago"
        image_url="https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512"
      />
    </div>
  )
}

export default Chats
