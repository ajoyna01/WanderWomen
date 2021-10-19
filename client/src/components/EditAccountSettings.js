import React, { useEffect, useState } from 'react';
import { Button, Input, FormField, Label, Textarea } from "../styles";


function UserEditAccountSettings({ currentUser }) {
  console.log(currentUser)
  const [userData, setUserData] = useState([])
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [campType, setCampType] = useState("");
  
  
  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((userData) => {
      setUserData(userData);
    })
  }, []);

  function handleProfileChange() {
    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username,
        first_name: firstName,
        age,
        city,
        state,
        zip_code: zipCode,
        email,
        image_url: imageUrl,
        bio,
        camp_type: campType,
      }),
    })
      .then((r) => r.json())
      .then((updatedProfile) => { 
        console.log(updatedProfile)
        const updatedProfiles = userData.map((u) => {
       if (u.id === updatedProfile.id) return updatedProfile;
          return u;
  }
  );
        setUserData(updatedProfiles);
      });
  }

  
  return (


    <div>
    <p>Edit Your Account Settings</p>
      <form onSubmit={handleProfileChange}>
      <FormField>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="firstname"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="age">Age</Label>
        <Input
          type="integer"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="city">City</Label>
        <Input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="state">State</Label>
        <Input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="zipcode">Zip Code</Label>
        <Input
          type="text"
          id="zip"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="imageUrl">Profile Image</Label>
        <Input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          rows="2"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="camptype">What Type of Camping Do You Like?</Label>
        <select className="camping_dropdown" id="campingtype">
         <option value={0}>Choose the type of camping you prefer...</option>
         <option value="campground">Campground</option>
         <option value="glamping">Glamping</option>
         <option value="primitive">Primitive</option>
       </select>
      </FormField>
      <FormField>
        <Button onClick={handleProfileChange} type="submit">{"Update Profile"}</Button>
      </FormField>
      </form>
    </div>
  )
}

export default UserEditAccountSettings;
