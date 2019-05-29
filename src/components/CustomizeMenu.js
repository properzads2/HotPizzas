import React, {Component} from 'react'
import pizza from './pizza.png'
import pizza2 from './pizza2.jpg'
import pizza3 from './pizza3.jpg'
import pizza4 from './pizza4.jpg'
import pizza5 from './pizza5.jpg'
import pizza6 from './pizza6.jpg'
import pizza7 from './pizza7.jpg'

class CustomizeMenu extends Component {
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
                <img src="https://www.pizzahut.com/assets/w/tile/thor/Cheese.png" align="center"/>
            <br/>
            <br/>
            <br/>
            <div class="ui raised very padded text container segment">
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
        </div>
        {/* <div class="column"> */}
        <div class="column">
            <h1 align="center"> Choose Extra Toppings </h1>
            <h3 align="left"> Each Extra Topping added is $0.50.</h3>
            <h2 align="center"> Veggies </h2>
            <h3> Olives </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Olive_black.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox"  onChange={this.props.olives} name="example"></input>
                <label> Select </label>
                </div>
            
            <h3> Diced Tomatoes </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Tomato.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.tomatoes} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Red Onions </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Onion_Red.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.onions} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Green Peppers </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_GreenBellPepper.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.greenpeper} name="example"></input>
                <label> Select </label>
                </div>            
            
            <h2 align="center"> Meat </h2>
            <h3> Pepperoni </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pepperoni.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.peperoni} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Sausage </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_ItalianSausage.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.sausage} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Beef </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Beef.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.beef} name="example"></input>
                <label> Select </label>
                </div>

            <h3> Chicken </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pork.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.chicken} name="example"></input>
                <label> Select </label>
                </div>

        </div>
  
        </div>
        <div class="ui vertical divider">
        </div>
    </div>
    
        )
    }
}

export default CustomizeMenu