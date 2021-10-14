function Header({user}) {
  return(
    <div className="header">
    
      
      <span class="material-icons orange600">face</span>
      <span className="logo">Wander:Women</span>
      <span class="material-icons orange600">try</span>
      <span className="login">Logged in as {user.username}</span>
    </div>
  )
};
export default Header;