import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, FormField, Label, Textarea } from "../styles";


function ParksList({user}) {
  const [parks, setParks] = useState([]);
  const [img, setImg] = useState([]);
  const [entry, setEntry] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?api_key=jiubTrXhccHzfcEc6ihhjVV18MssQBvGoLrHNkQw")
      .then((r) => r.json())
      .then((data) => {
        setParks(data.data); 
        console.log(data.data)
      },
      );

  }, []);
  // function handleUpdateRating (id) {
  //   fetch(`/parks/${id}`, {
  //     method: "PATCH",
  //   }).then(console.log("patch_rating"));
  // }
  // function handleDelete(id) {
  //   fetch(`/parks/${id}`, {
  //     method: "DELETE",
  //   }).then(console.log("delete"));
  // }
  // function handleAddEntry(id) {
  //   fetch(`/parks/${id}`,{
  //     method: "PATCH",
  //   }).then(console.log("patch"))
  // }


  return (
    <Wrapper>
      {parks.length > 0 ? (
        parks.map((park) => (
          
          
          // <Park key={park.id} >
            <Box>
              <h1>Explore...</h1>
              <h2>{park.fullName}</h2>
                <a href="https://www.nps.gov/abli/index.htm">https://www.nps.gov/abli/index.htm</a>
              <h3>{park.description}</h3>
              
              {/* <p> {park.images[1]}</p> */}
              <p>
                {/* <em>Rating: {park.rating} stars</em> */}
                &nbsp;&nbsp;
                {/* <cite>By {park.user.username}</cite> */}
              </p>
              <ReactMarkdown>{park.entry}</ReactMarkdown>
              <FormField>
            <Label htmlFor="entry">Comments</Label>
            <Textarea
              id="entry"
              rows="2"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
          </FormField>
              {/* <Button onClick={() => handleAddEntry(park.id)}as={Link} to="/new">Add entry</Button> */}
              {/* <Button onClick={() => handleDelete(park.id)}>Delete</Button> */}
              {/* <Button onClick={() => handleUpdateRating(park.id)}>Rate</Button> */}
            </Box>
          // </Park>
        ))
      ) : (
        <>
          <h2>None Found</h2>
          <Button as={Link} to="/new">
            Make new
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;



export default ParksList;
