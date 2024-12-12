import React from 'react' ;
import styled from 'styled-components';
import { Button, MainContainer } from '../MyApp';

function Admin() {
  return (
    <Container>
        <div>
        <h1>This is Admin Panel </h1> <br/>
        </div>

        <Button onClick={ ()=> {return <h2> dkjashdk </h2> } }> Button </Button>

    </Container>
  ) 
}

export default Admin ;


const Container = styled.div`
background-color: #323334 ;
max-width: 2600px;
min-width: 100%;
margin: 0 auto;

 @media (0 < width <600px) {
  min-width: 600px;
 }

`;
