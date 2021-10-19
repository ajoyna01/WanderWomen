
import React, { useEffect, useState } from "react";
import "../styles/CamperCard.css"
import axios from 'axios';
import { Button } from "../styles";
import { Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { ChatEngine } from "react-chat-engine";

function CamperCards() {
  const [users, setUsers] = useState([]);
  const [showBack, setShowBack] = useState(true);
  
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
  
  return (
  <div>
    <h1 className="title_buddy">Message your next camping buddy...</h1>
   { showBack ? (
     <>
      <div>
        <div className="tinderCards__cardContainer">
        {users.map(user=> (
        <TinderCard 
          className="swipe"
          key={user.first_name}
          >
          <div 
          style={{ backgroundImage: `url(${user.image_url})`}}
          className="card"
          >
            <button id="eye"className="material-icons" onClick={() => setShowBack(false)}>
            visibility</button>
            <Link as={Link} to="/chat/first_name" id="chat"className="material-icons">chat</Link>
            <h2>{user.first_name}, {user.age}   ~ {user.city}, {user.state}</h2>
         </div>
        </TinderCard >
       ))} 
     
    </div>
    </div>
    {/* </Link> */}
    </>
    ) : (
      <>
    <div>
    {users.map(user=> (
        <TinderCard 
          className="swipe"
          key={user.first_name}
          >
        <div 
          style={{ backgroundColor: "black" }}
          className="card"
        >
          <Link as={Link} to="/chat/first_name" id="chat"className="material-icons">chat</Link>
            <h3>{user.first_name}, {user.age}   ~ {user.city}, {user.state} &nbsp;</h3>
            <h3>{user.bio},{user.camp_type}&nbsp;</h3>
          <button id="back" className="material-icons" onClick={() => setShowBack(true)}>arrow_back_ios</button>
         </div>
        </TinderCard >
       ))} 
    </div>
    
    </>
    )
  }
    {/* // <ChatEngine */}
    {/* // height="100vh"
    // projectID="a7ebac5e-1fb9-4bae-8e40-d5e2ca145c12"
    // userName="AnnaW"
    // userSecret="1234" */}
    {/* // /> */}
  </div>
    
  )
}

export default CamperCards;
{/* <Link as={Link} to="/chat/:first_name" id="chat"className="material-icons">chat</Link> */}