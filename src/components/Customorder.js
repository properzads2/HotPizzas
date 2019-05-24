import React,{Component} from 'react'
import {Grid, Container, Radio} from 'semantic-ui-react'


export default class Customorder extends Component {
    constructor(){
     super()   
     this.state={
     dislay:""   
     }   

     



    }
    
    
    test(){
        const stylee= {display: 'none'};
        return(
        <img ref="image"  src="../empty.jpg" style={stylee} />)
        //<
        
    }
    test2(){
        const stylee= {display: 'none'};
        return(
            <img ref="greenpepper"  src="../greenpeppers.png" style={stylee} /> )      
             //<img ref="greenpepper"  src="../greenpeppers.png" style={stylee} />
        
    }




    

     

render(){





return(
<Grid>
    <Grid.Row columns={4}>
        <Grid.Column>
            <Container>
            <div role="list" class="ui list">
  <div role="listitem" class="item">Apples</div>
  <div role="listitem" class="item">Pears</div>
  <div role="listitem" class="item">Oranges</div>
</div>
                    
                </Container>
            </Grid.Column>

            <Grid.Column>
            <Container>
                this is container no 2 
            
                </Container>
            </Grid.Column>






    </Grid.Row>




</Grid>








)
}
}
