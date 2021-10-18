import React from 'react';
import TinderCard from 'react-tinder-card';

function CardFront({ users }) {
  return (
    <div>
       <div className="tinderCards__cardContainer">
      {users.map(user=> (
        <TinderCard 
          // onClick={() => selectedUser(user.id)}
          className="swipe"
          key={user.first_name}
          >
          <div 
          style={{ backgroundImage: `url(${user.image_url})`}}
          className="card"
          >
             {/* <Link as={Link} to="/chat/:first_name" id="chat"className="material-icons">chat</Link> */}
            <h3>{user.first_name}, {user.age}   ~ {user.city}, {user.state}</h3>
         </div>
        </TinderCard >
      ))}
      
    </div>
    </div>
  )
}

export default CardFront
