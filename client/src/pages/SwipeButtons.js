import React from 'react';
import '../styles/SwipeButtons.css'

function SwipeButtons() {
  return (
    <div className="swipeButtons">
     <span id="back"className="material-icons">undo</span>
      <span id="chat"className="material-icons">chat_bubble_outlined</span>
      <span id="star"className="material-icons">stars</span>
      <span id="X"className="material-icons">remove_circle</span>
    </div>
  )
}

export default SwipeButtons;
