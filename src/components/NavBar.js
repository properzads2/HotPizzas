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
      <div class="ui segment">
      <img class="ui small left floated image" src="https://feelingfoodish.com/wp-content/uploads/2012/08/New-York-Style-pizza.jpg"></img>
      <img class="ui centered medium image" src="https://assets3.thrillist.com/v1/image/1887188/size/tmg-venue_carousel_mobile.jpg" width="200"></img>
      <img class="ui small right floated image" src=""></img>
      </div>
    </Grid.Column>
   </Grid>



) 
    

 
