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

          
        WELCOME TO HOT PIZZA'S 

        <div class="ui five item menu">
  <a class="item">Sign-In</a>
  <a class="active item">Menu</a>
  <a class="item">Customize</a>
  <a class="item">Checkout</a>
  <a class="item">Logout</a>
</div>

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
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    
    </Grid.Column>
   </Grid> 
  
 
)