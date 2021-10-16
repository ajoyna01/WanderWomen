
import React, { useEffect, useState } from "react";
import "../styles/App.css"
import  TinderCard  from "react-tinder-card";
import axios from 'axios';
import SwipeButtons from "./SwipeButtons";

function CamperCards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios(
        "/users"
      );
      setUsers(response.data);
    } ;
    fetchUsers();
  }, []);
  //   fetch("/users")
  //     .then((r) => r.json())
  //     .then(data);
     
  // }, []);
  return (
    <div>
      <h1>Camper Cards</h1>
      <div className="card">
        <div className="tinderCards__cardContainer">
      {users.map(user=> (
        <TinderCard 
          className="swipe"
          key={user.first_name}
          preventSwipe={["up", "down"]}>
          <div 
          style={{ backgroundImage: `url(${user.image_url})`}}
          className="card"
          >
            <h3>{user.first_name}, {user.age}   ~ {user.city}, {user.state}</h3>
            <div className="swipeButtons">
     <span id="back"className="material-icons">undo</span>
      <span id="chat"className="material-icons">chat_bubble_outlined</span>
      <span id="star"className="material-icons">stars</span>
      <span id="X"className="material-icons">remove_circle</span>
    </div>
         </div>
        </TinderCard >
      ))}
    </div>
    </div>
    </div>
  )
}

export default CamperCards;
