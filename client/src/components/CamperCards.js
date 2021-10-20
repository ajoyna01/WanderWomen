
import React, { useEffect, useState } from "react";
import "../styles/CamperCard.css"
import axios from 'axios';
import { Button } from "../styles";
import { Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { ChatEngine } from "react-chat-engine";
import Profile from "./Profile";


function CamperCards() {
  const [users, setUsers] = useState([]);
  const [showBack, setShowBack] = useState(true);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(0);
console.log(user)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios(
        "/users"
      );
      setUsers(response.data);
      // console.log(response.data)
    } ;
    fetchUsers();
  }, []);
    function handleViewProfileClick(userClicked) {
      setShowBack(false);
      setUserId(userClicked.id);
      setUser(userClicked)
    }

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
            <Link to={`/user_profile/${user.id}`}id="eye"className="material-icons" 
            onClick={() => handleViewProfileClick(user)}>visibility</Link>
            <Link to={`/chat/first_name`} id="chat"className="material-icons">chat</Link>
            <h2>{user.first_name}, {user.age}   ~ {user.city}, {user.state}</h2>
         </div>
        </TinderCard >
       ))} 
     
    </div>
    </div>
      </>
    ) : (
      <>
    <Profile setUser={setUser} user={user} userId={userId} setUserId={setUserId} setShowBack={setShowBack} />
    
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