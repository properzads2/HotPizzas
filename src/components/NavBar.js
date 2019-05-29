import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

export default (props) => (

  <Grid centered columns={2}>
  
    <Grid.Column>
      <Header as="h2" textAlign="center">
      <br>
     </br>   
     <br>
     </br>
     <br>
     </br>   
     <br>
     </br>
     <br> 
     </br>

          
     <font color="red"> WELCOME TO HOT PIZZA'S </font>

<br/>

      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" fluid size="large" onClick={props.loginclick}>
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <Button color="blue" fluid size="large" onClick={props.sign}>Sign Up</Button>
      </Message>
    
    </Grid.Column>
   </Grid> 
  
 
)