import React, {Component} from 'react'
import pizza from './pizza.png'
import pizza2 from './pizza2.jpg'
import pizza3 from './pizza3.jpg'
import pizza4 from './pizza4.jpg'
import pizza5 from './pizza5.jpg'
import pizza6 from './pizza6.jpg'
import pizza7 from './pizza7.jpg'


class Menu extends Component {
    
    
    
    render() {
      console.log(this.props.pizza)




        return (
    <div>
        <div class="ui segment"style={{ backgroundImage: `url(${pizza})`, backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat' }}>
            <div class="ui two column very relaxed grid">
        </div>
        
        {/* <div class="ui checkbox"> 
            <input type="checkbox" onChange={this.props.price} name="VEGGIE"></input>
            <br/>
            <br/>
            <br/>
            <label> Select Pizza </label>          
        </div> */}

        




        <div class="ui horizontal divider"style={{ backgroundImage: `url(${pizza})`, backgroundSize: 'cover',
              }}>
            <h1 align="center"> Menu </h1>
            <p> Veggie Pizza </p>
            <p align="right"> $ 5.99 </p>
            <img src="https://dc8l3mwto1qll.cloudfront.net/assets/munch_images/rnyqn03734/veggie-lover-s-pizza.jpg" align="center"/>
            <p> Green Peppers, Red Onions, Diced Tomatoes, and Black Olives </p>
            <br/>
            <br/>
            <br/>

            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.price} name="example" unchecked></input>
                <label> Select </label>
                </div> 

                {/* <select name="cars">
           <option value="unselect">unselect</option>
    <option value="select">Select</option>

</select>
    */}

            
            <br/>
            <br/>





        </div>

        {/* <div class="ui checkbox"> 
            <input type="checkbox" name="example"></input>
            <br/>
            <br/>
            <label> Select Pizza </label>
        </div> */}

        <div class="ui horizontal divider">
            <p> Meat Pizza </p>
            <p align="right"> $7.99</p>
            <img src="https://www.pizzahut.com/assets/w/tile/thor/Classic_Meat_Lovers_Pizza.png" align="center"/>
            <p> Pepperoni, Sausage, Beef, and Pork </p>
            <div class="ui checkbox">
                <input type="checkbox" onChange={this.props.price2} name="example"></input>
                <label> Select </label>
                </div>
               <br/>
               <br/> 
               <p><button class="ui primary button" onClick={this.props.custom}>
                  CUSTOMIZE  
            </button></p>

            
        
            
            </div>
        
               
        </div>
        <p>
         </p>   
        <div class="ui raised very padded text container segment">
            <h1 class="ui header"> Pizza:
            <ul>
  
   {this.props.pizzaName}

</ul>

        




             </h1>
                               
                <h2 class="ui header" align="right">Order Total: {this.props.total} </h2>
            <button class="ui primary button" align="right">
                    Place Order
            </button>
        </div>
    </div>
        )
    }
}

export default Menu

