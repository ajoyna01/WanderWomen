
import React, { useEffect, useState } from "react";
import App from "../styles/App.css"
import  TinderCard  from "react-tinder-card";

function CamperCards() {
  const [people, setPeople] = useState([
    {
      name: 'Anna',
      url: 'https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512',
  },
  {
    name: 'Jenna',
    url: 'client/IMG_7082.JPG',
}
  ]);
  return (
    <div>
      <h1>Camper Cards</h1>
      <div className="tinderCards__cardContainer">
      {people.map(person=> (
        <TinderCard 
          className="swipe"
          key={person.name}
          preventSwipe={['up', 'down']}>
          <div 
          style={{ backgroundImage: `url(${person.url})`}}
          className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
    </div>
  )
}

export default CamperCards;
