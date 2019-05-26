import React, {Component} from 'react'

class CustomizeMenu extends Component {
    render() {
        return (
        <div class="ui segment">
            <div class="ui two column very relaxed grid">
            <div class="column">
                <h1 align="center"> Customize Your Pizza </h1>
                <h3 align="center"> Classic Pizza </h3>
                <img src="https://www.pizzahut.com/assets/w/tile/thor/Cheese.png" align="center"/>
        </div>
        <div class="column">
            <h1 align="center"> Choose Toppings </h1>
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