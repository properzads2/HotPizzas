import React, {Component} from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { Divider, Label } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(){

    super()    
    
    
      
       
    }
        


    render()
    
    
    
    {
        return (
            <Form>
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
            <br>
            </br>
            <Label font size='massive' color='red' pointing='down'>HOT PIZZA Sign up Page</Label>
            <br>
            </br>
            <br>
            </br>
            <Form.Field inline>
              <input type='text' placeholder='Email' />
              <Label pointing='left'>Email!</Label>
            </Form.Field>
            <Divider />
        
            <Form.Field inline>
              <Label pointing='right'>Your password must be 6 characters or more</Label>
              <input type='password' placeholder='Password' />
            </Form.Field>
            <Divider />
            <Form.Field inline>
              <input type='text' placeholder='First Name' />
              <Label pointing='left'>First Name!</Label>
            </Form.Field>
            <Divider />
            <Form.Field inline>
            <Label pointing='right'>Last Name!</Label>

              <input type='text' placeholder='Last Name' />
            </Form.Field>
            <Divider />
            <Form.Field inline>

              <input type='text' size='50' placeholder='Address' />
              <Label pointing='left'>Address</Label>

            </Form.Field>
        

            <Form.Button onClick={(e)=>this.props.submit(e)}>Submit</Form.Button>
            <Label font size='massive' color='red' pointing='down'>HOT PIZZA => THE HOTTEST PIZZA IN TOWN</Label>

          </Form>         

            

        
        )
    }
}

export default SignUp