import React,{Component} from 'react'
import {Grid, Container, Radio} from 'semantic-ui-react'


export default class Customize extends Component {
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




    componentDidMount(){
    const canvas = this.refs.pizza
    const ctx = canvas.getContext('2d')
    const img = this.refs.image
    const greenp = this.refs.greenpepper  
    
    // img.onload = () =>{
    //  //ctx.drawImage(img,50,50,400,400)   
    //  ctx.drawImage(img,50,50,400,400) 
    //  ctx.drawImage(greenp,10,20,100,100)  

    // }
}
     handler=()=>{
         window.onload = function() {
             const can = this.refs.pizza
            var ctx = can.getContext("2d");
    //         let img = document.createElement("img")
    //         img.src= "../greenpeppers.png"
    //         ctx.drawImage(img, 10, 10,100,100);
           ctx.fillRect(40,40, 100, 100)
           }
             

     }


    
    

        updateCanvas(){
            // run this when "canvasLoading" is false
        
        const ctx = this.refs.pizza.getContext("2d");
        var img = document.createElement("img");
        img.src= "../pizza.jpeg"
       ctx.drawImage(img, 200, 200,300,300)
      // ctx.fillRect(0,0, 100, 100)
    }
    

render(){





return(
<Grid>
    <Grid.Row columns={1}>
        <Grid.Column>
            <Container>


                <canvas ref="pizza" width={800} height={800}/>
                
                {this.test()}
                {this.test2()}
                    
                </Container>
            </Grid.Column>

            <Grid.Column>
            <Container>
            <input type="radio" /><label>Tomato </label> 
            <button onClick={this.handler}/>               

                </Container>
            </Grid.Column>






    </Grid.Row>




</Grid>








)
}
}