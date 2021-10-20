import React, { useState } from 'react'
import "../styles/ChatScreen.css"


function ChatScreen() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      first_name: 'Emily',
      image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/12091445_10208271238925159_4165742369054501750_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=O9bU--J2fy4AX8HHntz&_nc_ht=scontent-hou1-1.xx&oh=efc816efe7d612c73a42478846a35141&oe=6194E1C8",
      message: "Hi Anna!"
  },
  {
    first_name: "Emily",
    image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/12091445_10208271238925159_4165742369054501750_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=O9bU--J2fy4AX8HHntz&_nc_ht=scontent-hou1-1.xx&oh=efc816efe7d612c73a42478846a35141&oe=6194E1C8",
    message: "Did you have a good trip?"
  },
  {
    message: "Hey Em! Yes! It was so fun!"
  }
    ]);

  const handleSubmit = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chat_screen">
      <p className="chatScreen_timestamp">Your conversation with Emily on 10/16/21</p>
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
