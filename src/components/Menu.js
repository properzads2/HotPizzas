import React, {Component} from 'react'

class Menu extends Component {
    render() {
        return (
        <div class="ui segment">
            <div class="ui two column very relaxed grid">
        </div>
        
        <div class="ui checkbox"> 
                    <input type="checkbox" name="name"/>
                    <br/>
                    <br/>
                    <br/>
                    <label> Select Pizza</label>
                    
        </div>
        <div class="ui horizontal divider">
            <p> Veggie Pizza </p>
            <p align="right"> $5.99</p>
            <img src="https://dc8l3mwto1qll.cloudfront.net/assets/munch_images/rnyqn03734/veggie-lover-s-pizza.jpg" align="center"/>
            <p> Green Peppers, Red Onions, and Diced Tomatoes </p>
            <br/>
            <br/>
            <br/>
            Or
            <br/>
            <br/>
            </div>

            <div class="ui checkbox"> 
                    <input type="checkbox" name="name" onClick={this.onClick}></input>
                    <br/>
                    <br/>
                    <label> Select Pizza</label>
            </div>
            <div class="ui horizontal divider">
            <p> Meat Pizza </p>
            <p align="right"> $7.99</p>
            <img src="https://www.pizzahut.com/assets/w/tile/thor/Classic_Meat_Lovers_Pizza.png" align="center"/>
            <p> Pepporoni, Sausage, Beef, and Pork </p>
            </div>

            
        </div>
        )
    }
}

export default Menu

