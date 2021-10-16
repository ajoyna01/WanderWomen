import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import CamperCards from "../pages/CamperCards";
import Header from "./Header";
import SwipeButtons from "../pages/SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import "../styles/App.css"


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

  return (
  <>
  <BrowserRouter>
    
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
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
           <SwipeButtons />
           </Route>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
