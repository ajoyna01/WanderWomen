import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/Profile.css"


function Profile({ user, setUser, setUserId, userId, setShowBack }) {
console.log(userId)
const [viewUser, setViewUser] = useState({});
console.log(viewUser)

useEffect(() => {
  const fetchUser = async () => {
    const response = await axios(
      `http://localhost:3000/users/${userId}`
    );
    setViewUser(response.data);
    console.log(response.data)
  } ;
  fetchUser();
}, []);

  function handleClick(e) {
    e.preventDefault();
    setShowBack(true);
  }

  return (
   
    <div className= "w3-content w3-margin-top">
      <Link onClick={handleClick} id="back" className="material-icons" >arrow_back_ios</Link>
    <div className= "w3-row-padding" key={user.id}>
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img className="profile_pic" src={user.image_url} alt="Avatar"/>
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>{user.first_name}</h2>
          </div>
        </div>
        
        <div class="w3-container">
          <p className="cabin"><i  class="material-icons">fireplace</i>     {user.camp_type}</p>
          <p className="location"><i  class="material-icons">place</i>{user.city}, {user.state}</p>
          <p className="email"><i  class="material-icons">mail</i>     {user.email}</p>
          <Link to="/chat/first_name" id="chat"className="material-icons">chat</Link>
        </div>
        </div>
        </div> 
      <div class="w3-twothird">
        <div class="w3-container w3-card w3-white w3-margin-bottom">
          <p className="person_pin"><i  class="material-icons">person_pin</i>     {user.bio}</p>
        </div>
      </div>
    </div >
  </div>
    
   
  )
}

export default Profile
{/* <div>
{users.map(user=> (
    <div
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
      <button id="back" className="material-icons" >arrow_back_ios</button>
     </div>
    </div >
    
   ))} 
</div> */}