
import React, { useEffect, useState } from "react";
import "../styles/CamperCard.css"
import axios from 'axios';
import SwipeButtons from "./SwipeButtons";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import TinderCard from "react-tinder-card";
import { ChatEngine } from "react-chat-engine";

function CamperCards() {
  const [users, setUsers] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios(
        "/users"
      );
      setUsers(response.data);
      console.log(response.data)
    } ;
    fetchUsers();
  }, []);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
  return (
  <div>
    <h1 className="title_buddy">Message your next camping buddy...</h1>
    <ReactCardFlip className="card" isFlipped={isFlipped} flipDirection="vertical">
    <div>
      
       <div className="tinderCards__cardContainer">
      {users.map(user=> (
        <TinderCard 
          // onClick={() => selectedUser(user.id)}
          className="swipe"
          key={user.username}
          >
          <div 
          style={{ backgroundImage: `url(${user.image_url})`}}
          className="card" onClick={handleClick}
          >
             <Link as={Link} to="/chat/:first_name" id="chat"className="material-icons">chat</Link>
            <h3>{user.first_name}, {user.age}   ~ {user.city}, {user.state}</h3>
         </div>
        </TinderCard >
      ))}
      
    </div>
    </div>
      
      <div >
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
    <ChatEngine
    height="100vh"
    projectID="a7ebac5e-1fb9-4bae-8e40-d5e2ca145c12"
    userName="AnnaW"
    userSecret="1234"
    />
  </div>
    
  )
}

export default CamperCards;
