import React, {Component} from 'react'

class CustomizeMenu extends Component {
    render() {
        return (
        <div class="ui segment">
            <div class="ui two column very relaxed grid">
            <div class="column">
                <h1 align="center"> Customize Your Pizza </h1>
                <img src="https://www.pizzahut.com/assets/w/tile/thor/Cheese.png" align="center"/>
            <br/>
            <br/>
            <br/>
            <div class="ui raised very padded text container segment">
            <h2 align="center"> Checkout </h2>
            <h2 align="left"> Order Details</h2>
            <h2 class="ui header"> Pizza Type: Customizable </h2>
            <h3 class="ui header"> Toppings: </h3>
            <h2 class="ui header" align="right">Order Total: </h2>
            <button class="ui primary button" align="right">
                    Place Order
            </button>
            </div>
            <br/>
            <br/>
            <img src="https://assets3.thrillist.com/v1/image/1887188/size/tmg-venue_carousel_mobile.jpg" align="center"/>
        </div>
        <div class="column">
            <h1 align="center"> Choose Toppings </h1>
            <h3 align="left"> Each Topping added is $0.50.</h3>
            <h2 align="center"> Veggies </h2>
            <h3> Olives </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Olive_black.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>
            
            <h3> Diced Tomatoes </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Tomato.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>

            <h3> Red Onions </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Onion_Red.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>

            <h3> Green Peppers </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_GreenBellPepper.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>            
            
            <h2 align="center"> Meat </h2>
            <h3> Pepperoni </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pepperoni.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>

            <h3> Sausage </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_ItalianSausage.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>

            <h3> Beef </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Beef.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
                <label> Select </label>
                </div>

            <h3> Pork </h3>
            <img src="https://www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Pork.png"/>
            
            <div class="ui checkbox">
                <input type="checkbox" name="example"></input>
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