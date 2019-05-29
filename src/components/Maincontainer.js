import React,{Component} from 'react'
//import Maincontainer from './components/Maincontainer'
import NavBar from './NavBar'
import Menu from './Menu'
import { get } from 'https';
import CustomizeMenu from './CustomizeMenu'
import PlaceOrder from './PlaceOrder'

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
show2: true,
olive:true,
tomatoes:true,
redonions:true,
greenpeper:true,
peperoni:true,
sausage:true,
beef:true,
chicken:true,
toppings:[],
customizeTotal: 7.99
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


//let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)").innerText
//let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)").innerText
//console.log(pizza,price)


if (this.state.show1 == true){

let pzz = {
name: "VEGGIE PIZZA",
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
 
//let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
//let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText

if (this.state.show2 == true){

let pzz = {
    name: "MEAT PIZZA",
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

handleOlives=(e)=>{
 
    //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
    //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
    if (this.state.olive == true){
        console.log("this is clicking")

    let newTop = {
        name: "Olives",
        price: 0.50
        }
        let newToppings = this.state.toppings
        newToppings.push(newTop)
        this.setState({
            toppings: newToppings,
            customizeTotal: this.state.customizeTotal + 0.50,
            olive: false
        })}
        else {
            let x = this.state.toppings.filter(toop=>toop.name!="Olives")
            this.setState({
                toppings: x,
                customizeTotal: this.state.customizeTotal - 0.50,
                olive: true
            })}
            
       // console.log(this.state.toppings)
       // console.log(this.state.customizeTotal)
        
    }

    handleTomatoes=(e)=>{
 
        //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
        //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
        if (this.state.tomatoes == true){
            console.log("this is clicking")
    
        let newTop = {
            name: "Diced Tomatoes",
            price: 0.50
            }
            let newToppings = this.state.toppings
            newToppings.push(newTop)
            this.setState({
                toppings: newToppings,
                customizeTotal: this.state.customizeTotal + 0.50,
                tomatoes: false
            })}
            else {
                let x = this.state.toppings.filter(toop=>toop.name!="Diced Tomatoes")
                this.setState({
                    toppings: x,
                    customizeTotal: this.state.customizeTotal - 0.50,
                    tomatoes: true
                })}
                
           // console.log(this.state.toppings)
           // console.log(this.state.customizeTotal)
            
        }
    
        handleOnions=(e)=>{
 
            //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
            //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
            if (this.state.redonions == true){
                console.log("this is clicking")
        
            let newTop = {
                name: "Red Onions",
                price: 0.50
                }
                let newToppings = this.state.toppings
                newToppings.push(newTop)
                this.setState({
                    toppings: newToppings,
                    customizeTotal: this.state.customizeTotal + 0.50,
                    redonions: false
                })}
                else {
                    let x = this.state.toppings.filter(toop=>toop.name!="Red Onions")
                    this.setState({
                        toppings: x,
                        customizeTotal: this.state.customizeTotal - 0.50,
                        redonions: true
                    })}
                    
               // console.log(this.state.toppings)
               // console.log(this.state.customizeTotal)
                
            }
        
            handleGreenpeper=(e)=>{
 
                //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
                //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
                if (this.state.greenpeper == true){
                    console.log("this is clicking")
            
                let newTop = {
                    name: "Green Peper",
                    price: 0.50
                    }
                    let newToppings = this.state.toppings
                    newToppings.push(newTop)
                    this.setState({
                        toppings: newToppings,
                        customizeTotal: this.state.customizeTotal + 0.50,
                        greenpeper: false
                    })}
                    else {
                        let x = this.state.toppings.filter(toop=>toop.name!="Green Peper")
                        this.setState({
                            toppings: x,
                            customizeTotal: this.state.customizeTotal - 0.50,
                            greenpeper: true
                        })}
                        
                   // console.log(this.state.toppings)
                   // console.log(this.state.customizeTotal)
                    
                }
                handlePeperoni=(e)=>{
 
                    //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
                    //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
                    if (this.state.peperoni == true){
                        console.log("this is clicking")
                
                    let newTop = {
                        name: "Peperoni",
                        price: 0.50
                        }
                        let newToppings = this.state.toppings
                        newToppings.push(newTop)
                        this.setState({
                            toppings: newToppings,
                            customizeTotal: this.state.customizeTotal + 0.50,
                            peperoni: false
                        })}
                        else {
                            let x = this.state.toppings.filter(toop=>toop.name!="Peperoni")
                            this.setState({
                                toppings: x,
                                customizeTotal: this.state.customizeTotal - 0.50,
                                peperoni: true
                            })}
                            
                       // console.log(this.state.toppings)
                       // console.log(this.state.customizeTotal)
                        
                    }
                    handleSausage=(e)=>{
 
                        //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
                        //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
                        if (this.state.sausage == true){
                            console.log("this is clicking")
                    
                        let newTop = {
                            name: "Sausage",
                            price: 0.50
                            }
                            let newToppings = this.state.toppings
                            newToppings.push(newTop)
                            this.setState({
                                toppings: newToppings,
                                customizeTotal: this.state.customizeTotal + 0.50,
                                sausage: false
                            })}
                            else {
                                let x = this.state.toppings.filter(toop=>toop.name!="Sausage")
                                this.setState({
                                    toppings: x,
                                    customizeTotal: this.state.customizeTotal - 0.50,
                                    sausage: true
                                })}
                                
                           // console.log(this.state.toppings)
                           // console.log(this.state.customizeTotal)
                            
                        }

                        handleBeef=(e)=>{
 
                            //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
                            //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
                            if (this.state.beef == true){
                                console.log("this is clicking")
                        
                            let newTop = {
                                name: "Beef",
                                price: 0.50
                                }
                                let newToppings = this.state.toppings
                                newToppings.push(newTop)
                                this.setState({
                                    toppings: newToppings,
                                    customizeTotal: this.state.customizeTotal + 0.50,
                                    beef: false
                                })}
                                else {
                                    let x = this.state.toppings.filter(toop=>toop.name!="Beef")
                                    this.setState({
                                        toppings: x,
                                        customizeTotal: this.state.customizeTotal - 0.50,
                                        beef: true
                                    })}
                                    
                               // console.log(this.state.toppings)
                               // console.log(this.state.customizeTotal)
                                
                            }
                            
                            handleChicken=(e)=>{
 
                                //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
                                //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
                                if (this.state.chicken == true){
                                    console.log("this is clicking")
                            
                                let newTop = {
                                    name: "Chicken",
                                    price: 0.50
                                    }
                                    let newToppings = this.state.toppings
                                    newToppings.push(newTop)
                                    this.setState({
                                        toppings: newToppings,
                                        customizeTotal: this.state.customizeTotal + 0.50,
                                        chicken: false
                                    })}
                                    else {
                                        let x = this.state.toppings.filter(toop=>toop.name!="Chicken")
                                        this.setState({
                                            toppings: x,
                                            customizeTotal: this.state.customizeTotal - 0.50,
                                            chicken: true
                                        })}
                                        
                                   // console.log(this.state.toppings)
                                   // console.log(this.state.customizeTotal)
                                    
                                }
                            


 
    dataToppings=()=>{
        let name = "Pizza Name:"
        let price = "Price:"
        let priceTotal = 0
        //let phoj = 0
        
         if (this.state.toppings != null){
     let x = this.state.toppings.map(piz=>{
       //   priceTotal = parseInt(piz.price) + priceTotal
       //     console.log(phoj.split('$'))     
         return(<li>  {piz.name} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; {piz.price} </li>) }
             
         )
         console.log(this.state.total)
         return (x)
              }}  

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

  checkout=()=>{
    this.setState({condition: 4})

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
     <CustomizeMenu olives={this.handleOlives} toppings={this.dataToppings()} total={this.state.customizeTotal} tomatoes={this.handleTomatoes} onions={this.handleOnions} greenpeper={this.handleGreenpeper} peperoni={this.handlePeperoni} sausage={this.handleSausage} beef={this.handleBeef} chicken={this.handleChicken} checkout={this.checkout}/>    
     )   


        }


        if (this.state.condition == 4){
            return (
            <PlaceOrder/>    
            )   
       
       
               }
           

    }

}