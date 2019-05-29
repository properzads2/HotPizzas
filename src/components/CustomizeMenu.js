import React, {Component} from 'react'
import pizza from './pizza.png'
import pizza2 from './pizza2.jpg'
import pizza3 from './pizza3.jpg'
import pizza4 from './pizza4.jpg'
import pizza5 from './pizza5.jpg'
import pizza6 from './pizza6.jpg'
import pizza7 from './pizza7.jpg'

import blank from './blank.png'

class CustomizeMenu extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const base= this.refs.cheese
        // ctx.rect(60, 60, 300, 300);
        // ctx.rect(60, 60, 100, 100);
        // ctx.fillStyle = 'green';
        // ctx.fill()
     //   ctx.fillStyle="red";
//ctx.fillRect(60,60,300,300);  // filled with red

base.onload = () => {
    ctx.drawImage(base, 50,60,350,350)
    //ctx.font = "40px Courier"
    //ctx.fillText(this.props.text, 210, 75)
  


// ctx.fillStyle="green";
// ctx.fillRect(70,70,280,280);  // filled with green

// ctx.fillStyle="blue";
// ctx.fillRect(80,80,260,260);  // filled with blue
}
    }




    render() {
        return (
        <div class="ui segment">
             <div class="ui two column very relaxed grid" style={{ backgroundImage: `url(${pizza7})`, backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat' }}>
            {/* <div style={{ backgroundImage: `url(${pizza4})`, backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat' }}> */}
            <div style={{ backgroundImage: `url(${pizza7})`, backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat' }}>
                 
                <h1 align="center"> Customize Your Pizza </h1>
                <h3 align="center"> Classic Pizza </h3>
            <br/>
            <br/>
            <br/>
            <div class="ui raised very padded text container segment" align="top">
            <h2 align="center"> Checkout </h2>
            <h2 align="left"> Order Details</h2>
            <h2 class="ui header"> Pizza Type: CHEESE CRUST &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $7.99</h2>
            <h3 class="ui header"> Toppings: </h3>
            <ul>
           {this.props.toppings}
          
           </ul>


            <h2 class="ui header" align="right">Order Total: {this.props.total} </h2>
            <button class="ui primary button" align="right" onClick={this.props.checkout}>
                    Place Order
            </button>
            </div>
>
        <canvas ref="canvas"   width={400} height={600}  />
  
        </div>
        {/* <div class="column"> */}
        
        <div class="column" align="left"> 
    
             

            <h1 align="center"> Choose Toppings </h1>
            <h3 align="left"> Each Topping added is $0.50.</h3>
            <h2 align="center"> Veggies </h2>
            
            <h3> Olives </h3>
            <img ref="olives" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Olive_black.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox"  onChange={(e)=>this.props.olives(e,this.refs.canvas,this.refs.olives,this.refs.blank)} name="example"></input>
                <label> Select </label>
                </div>
            
            <h3> Diced Tomatoes </h3>
            <img ref="tomatoes"src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Tomato.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.tomatoes(e,this.refs.canvas,this.refs.tomatoes)} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Red Onions </h3>
            <img ref="onions"src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Onion_Red.png"/>
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.onions(e,this.refs.canvas,this.refs.onions)} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Green Peppers </h3>
            <img ref="green" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_GreenBellPepper.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.greenpeper(e,this.refs.canvas,this.refs.green)} name="example"></input>
                <label> Select </label>
                </div>            
            
            <h2 align="center"> Meat </h2>
            <h3> Pepperoni </h3>
            <img ref="peperoni" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pepperoni.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.peperoni(e,this.refs.canvas,this.refs.peperoni)} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Sausage </h3>
            <img ref="sausage" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_ItalianSausage.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.sausage(e,this.refs.canvas,this.refs.sausage)} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Beef </h3>
            <img ref="beef" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Beef.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.beef(e,this.refs.canvas,this.refs.beef)} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Chicken </h3>
            <img ref="chicken" src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pork.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={(e)=>this.props.chicken(e,this.refs.canvas,this.refs.chicken)} name="example"></input>
                <label> Select </label>
                </div>

        </div>
  
        </div>
        <div class="ui vertical divider">

         <img ref="cheese" src="https://www.pizzahut.com/assets/w/tile/thor/Cheese.png"  height="1" width="1" align="left"/>
         <img ref="blank" src={blank}  align="left"/>


        </div>
    </div>
    
        )
    }
}

export default CustomizeMenu