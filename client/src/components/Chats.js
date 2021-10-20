import React from 'react';
import "../styles/Chat.css";
import Chat from './Chat'


function Chats({user}) {
  return (
    <div className="chats">
      
      <Chat
        first_name= "Denise"
        message="Hi there! I see you live near me! What are your favorite camping spots?"
        timestamp="40 seconds ago"
        image_url="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/67294499_10219997295983383_5909045507967156224_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=GWmMNBGUM8oAX_0iBCw&_nc_oc=AQlXqd_1i5INFxBqLBep7uY8g-vOt9LUlYwstkSx0mspQSuIc8l3jn2UpIUUwQc6sho&_nc_ht=scontent-hou1-1.xx&oh=70aac25c949f8fbd8a0289c6274bae96&oe=61943515"
      />
      <Chat 
        first_name= "Emily"
        message="Hey Anna! Did you have a good trip?"
        timestamp="53 minutes ago"
        image_url="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/12091445_10208271238925159_4165742369054501750_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=O9bU--J2fy4AX8HHntz&_nc_ht=scontent-hou1-1.xx&oh=efc816efe7d612c73a42478846a35141&oe=6194E1C8"
      />
      <Chat
        first_name= "Ashley"
        message="Girl you have to check out this website!"
        timestamp="1 day ago"
        image_url="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/p206x206/120659656_10116304072440010_7623346809887267587_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Kk69IvcQuI4AX8CcDJO&_nc_ht=scontent-hou1-1.xx&oh=3d648d9c423b550497ef23d910c42383&oe=6194FC79"
      />
      <Chat
        first_name= "Crystal"
        message="Hi!"
        timestamp="5 days ago"
        image_url="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/246053063_10221028502729101_5769647254023165518_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OYPTA2FWSgwAX9Ge7AX&_nc_ht=scontent-hou1-1.xx&oh=72e6fd910ab554c9445f447389caef1f&oe=619447C1"
      />
    </div>
  )
}

export default Chats
