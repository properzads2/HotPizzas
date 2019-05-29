import React, {Component} from 'react'

class SignUp extends Component {
    render() {
        return (
        <div class="ui form">
            <div class="field">
                <label>Name</label>
                <input type="text"/>

                <label>Email</label>
                <input type="email"/>

                <label>Address</label>
                <input type="text"/>

                <label>Card Number</label>
                <input type="number"/>

                <button> Register </button>
            </div>
        </div>
        )
    }
}

export default SignUp