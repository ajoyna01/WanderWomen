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
import axios from "axios";
import Profile from "./Profile";
import ParksList from "./ParksList";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await axios(
        "/me"
      );
      setCurrentUser(response.data);
      console.log(response.data)
    } ;
    fetchCurrentUser();
  }, []);
  if (!currentUser) return <Login onLogin={setCurrentUser} />;
  
  return (
  <>
  <BrowserRouter>
    
      
        <Switch>
          <Route path="/user_profile/id">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} backButton="/" />
            <Profile currentUser={currentUser} />
          </Route>
          <Route path="/explore">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} backButton="/" />
            <ParksList currentUser={currentUser}/>
          </Route>
          <Route path="/profile">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} backButton="/" />
            <UserEditAccountSettings  currentUser={currentUser} />
          </Route>
          <Route path="/chat/first_name">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} backButton="/chat" />
            <ChatScreen  />
          </Route>
          <Route path="/chat">
            <Header setCurrentUser={setCurrentUser} currentUser={currentUser} backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
           <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
           <CamperCards />
           </Route>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
