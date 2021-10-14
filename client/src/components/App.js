import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import CamperCards from "../pages/CamperCards";
import Header from "./Header";

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
    {/* <div style={{ backgroundImage:}} */}
    <Header user={user}/>
      <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/">
           <CamperCards/>
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
