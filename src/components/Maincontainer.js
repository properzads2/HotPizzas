import React,{Component} from 'react'
//import Maincontainer from './components/Maincontainer'
import NavBar from './NavBar'
import Menu from './Menu'
import { get } from 'https';
import CustomizeMenu from './CustomizeMenu'


export default class Maincontainer extends Component {
constructor(){
super()
this.state={
user:[],
toggle:true,
condition:1,
pizza: [],
total: 0,
show1: true, 
show2: true

}
}

handleLogin=(e)=>{

//console.log("login clicked")

let username = e.target.parentElement.querySelector("#root > div > div > div > div.ui.segment > form > div:nth-child(1) > div > input[type=text]").value

let password = e.target.parentElement.querySelector("#root > div > div > div > div.ui.segment > form > div:nth-child(2) > div > input[type=password]").value
//console.log(username,password)
this.setState({
    condition: 2
})

}

priceCalculator=(e)=>{


let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)").innerText
let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)").innerText
console.log(pizza,price)


if (this.state.show1 == true){

let pzz = {
name: pizza,
price: 5.99
}
let newPizza = this.state.pizza
newPizza.push(pzz)
this.setState({
    pizza: newPizza,
    total: this.state.total + 5.99,
    show1: false
})}
else {
let x = this.state.pizza.filter(pizz=>pizz.name!="VEGGIE PIZZA")
this.setState({
    pizza: x,
    total: this.state.total - 5.99,
    show1: true
})}

console.log(this.state.pizza)


}

priceCalculator2=(e)=>{
 
let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText

if (this.state.show2 == true){

let pzz = {
    name: pizza,
    price: 7.99
    }
    let newPizza = this.state.pizza
    newPizza.push(pzz)
    this.setState({
        pizza: newPizza,
        total: this.state.total + 7.99,
        show2: false
    })}
    else {
        let x = this.state.pizza.filter(pizz=>pizz.name!="MEAT PIZZA")
        this.setState({
            pizza: x,
            total: this.state.total - 7.99,
            show2: true
        })}
        
    console.log(this.state.pizza)
    
}

data=()=>{
    let name = "Pizza Name:"
    let price = "Price:"
    let priceTotal = 0
    //let phoj = 0
    
     if (this.state.pizza != null){
 let x = this.state.pizza.map(piz=>{
      priceTotal = parseInt(piz.price) + priceTotal
   //     console.log(phoj.split('$'))     
     return(<li>  {piz.name} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; {piz.price} </li>) }
         
     )
     console.log(this.state.total)
     return (x)
          }}
    // else 
    // for (var i=0; i < 4; i++) {

    // } 

   customize=()=>{
    this.setState({condition: 3})

   }

render(){

 let newArray   
let x = this.state.pizza.filter(pizz=>pizz.name!="VEGGIE PIZZA") 
//if (x !== 'undefined'){

//}
console.log(x)

if (this.state.condition == 1){

    return(

<NavBar loginclick={this.handleLogin}/>

)
    }

    if (this.state.condition == 2)   {
      return (  
     <Menu price={this.priceCalculator} price2={this.priceCalculator2} pizzaName={this.data()} total={this.state.total} custom={this.customize}/>  

     
      )

    }

    if (this.state.condition == 3){
     return (
     <CustomizeMenu/>    
     )   


        }

    }

}