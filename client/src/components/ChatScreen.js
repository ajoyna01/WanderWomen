import React, { useState } from 'react'
import "../styles/ChatScreen.css"


function ChatScreen() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      first_name: 'Anna',
      image_url: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512",
      message: "What's up?"
  },
  {
    first_name: "Anna",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512",
    message: "how's it going"
  },
  {
    message: "How's it going?"
  }
    ]);

  const handleSubmit = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chat_screen">
      <p className="chatScreen_timestamp">You matched with Anna on 10/16/21</p>
      {messages.map((message) => 
        message.first_name ? (
        <div className="chatScreen_message">
          <img className="chat_image" alt={message.first_name} src={message.image_url} />
          <p className="chatScreen_text">{message.message}</p>
        </div>) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
          <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen_inputField"
          placeholder="Type a message" type="text" />
          <button onClick={handleSubmit} type="submit" className="input_button">Send</button>
      </form>

     
      
    </div>
  );
}

export default ChatScreen
