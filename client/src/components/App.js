import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import CamperCards from "../pages/CamperCards";
import Header from "./Header";
import SwipeButtons from "../pages/SwipeButtons";
import Chats from "./Chats";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
  <>
  <BrowserRouter>
    
      <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/">
           <Header />
           <CamperCards />
           <SwipeButtons />
           </Route>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
