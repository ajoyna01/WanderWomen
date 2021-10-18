import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import CamperCards from "./CamperCards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import "../styles/App.css"
import UserEditAccountSettings from "./EditAccountSettings";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if (!currentUser) return <Login onLogin={setCurrentUser} />;
  // function handleViewCamperProfile(profileToView) {
  //   const connectionMade = connection
  // }
  return (
  <>
  <BrowserRouter>
    
      
        <Switch>
          <Route path="/profile">
            <Header currentUser={currentUser} backButton="/" />
            <UserEditAccountSettings  currentUser={currentUser} />
          </Route>
          <Route path="/chat/:first_name">
            <Header currentUser={currentUser} backButton="/chat" />
            <ChatScreen  />
          </Route>
          <Route path="/chat">
            <Header currentUser={currentUser} backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
           <Header currentUser={currentUser}/>
           <CamperCards />
           </Route>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
