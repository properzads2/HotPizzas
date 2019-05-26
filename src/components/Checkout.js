import React, {Component} from 'react'

class Checkout extends Component {
    render() {
        return (
            <div class="ui raised very padded text container segment">
            <h1 align="center"> Checkout </h1>
            <h1 align="left"> Order Details</h1>
            <h2 class="ui header"> Pizza Type: </h2>
            <h3 class="ui header"> Toppings: </h3>
            <h2 class="ui header" align="right">Order Total: </h2>
            <button class="ui primary button" align="right">
                    Place Order
            </button>
        </div>
        )
    }
}

export default Checkout