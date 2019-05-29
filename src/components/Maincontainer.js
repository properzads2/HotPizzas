import React,{Component} from 'react'
//import Maincontainer from './components/Maincontainer'
import NavBar from './NavBar'
import Menu from './Menu'
import { get } from 'https';
import CustomizeMenu from './CustomizeMenu'
import PlaceOrder from './PlaceOrder'
import blank from './pizza7.jpg'

import Signup from './Signup'
import { tsConstructSignatureDeclaration } from '@babel/types';
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
customizeTotal: 7.99,
user: []
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


signup=(e)=>{
console.log("this is singup")
this.setState({
   condition: 5 
})
}

submit=(e)=>{

console.log("submit")
console.log(e.target.parentElement)
 let email =(document.querySelector("#root > div > form > div:nth-child(10) > input[type=text]").value)
 let password = (document.querySelector("#root > div > form > div:nth-child(12) > input[type=password]").value)
 let firstname =(document.querySelector("#root > div > form > div:nth-child(14) > input[type=text]").value)
 let lastname =(document.querySelector("#root > div > form > div:nth-child(16) > input[type=text]").value)
 let address = (document.querySelector("#root > div > form > div:nth-child(18) > input[type=text]").value)
 console.log('loggggggg',email,password,firstname,lastname,address)

 let newUser ={
  email: email,
  password: password,
  firstname: firstname,
  lastname: lastname,
  address: address   
 }


 
// fetch('http://localhost:3000/users',{
//     method:'POST',  
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify(temp)
// })
// .then(response=>{
//     debugger;
//     console.log(response.json())
// })
//   .then(data=>console.log(data))
  
 this.setState({
     user: newUser,
     condition: 1
 })
 console.log(this.state.user)

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

handleOlives=(e,canvas,img,blank)=>{
    console.log(canvas)
    //let pizza = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)").innerText
    //let price = e.target.parentElement.parentElement.querySelector("#root > div > div > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").innerText
    if (this.state.olive == true){
        console.log(img)

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
        })
    
       // const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        
      //  img.onload = () => {
          //  ctx.drawImage(img, 90,90,230,230)
          ctx.drawImage(img,190,100,30,30)
          ctx.drawImage(img,230,100,30,30)
          ctx.drawImage(img,270,100,30,30)     
          ctx.drawImage(img,310,120,30,30) 
          ctx.drawImage(img,350,160,30,30) 
          ctx.drawImage(img,350,200,30,30) 
         ctx.drawImage(img,350,240,30,30) 
         ctx.drawImage(img,340,270,30,30) 
         ctx.drawImage(img,290,310,30,30) 
         ctx.drawImage(img,250,330,30,30)    
         ctx.drawImage(img,220,330,30,30)
         ctx.drawImage(img,180,330,30,30)
         ctx.drawImage(img,140,330,30,30) 
         ctx.drawImage(img,115,310,30,30)
         ctx.drawImage(img,90,290,30,30) 
         ctx.drawImage(img,80,270,30,30)   
         ctx.drawImage(img,70,230,30,30)
         ctx.drawImage(img,70,190,30,30)    
         ctx.drawImage(img,95,140,30,30) 
         ctx.drawImage(img,125,120,30,30) 
         ctx.drawImage(img,155,100,30,30)   
   
    //}
    }
        else {
            let x = this.state.toppings.filter(toop=>toop.name!="Olives")
            this.setState({
                toppings: x,
                customizeTotal: this.state.customizeTotal - 0.50,
                olive: true
            })
        //     const ctx = canvas.getContext("2d")
        //     ctx.drawImage(blank,190,100,15,15)
        //   ctx.drawImage(blank,230,100,15,15)
        //   ctx.drawImage(blank,270,100,15,15)     
        //   ctx.drawImage(blank,310,120,15,15) 
        //   ctx.drawImage(blank,350,160,15,15) 
        //   ctx.drawImage(blank,350,200,15,15) 
        //  ctx.drawImage(blank,350,240,15,15) 
        //  ctx.drawImage(blank,340,270,15,15) 
        //  ctx.drawImage(blank,290,310,15,15) 
        //  ctx.drawImage(blank,250,330,15,15)    
        //  ctx.drawImage(blank,220,330,30,30)
        //  ctx.drawImage(blank,180,330,30,30)
        //  ctx.drawImage(blank,140,330,30,30) 
        //  ctx.drawImage(blank,115,310,30,30)
        //  ctx.drawImage(blank,90,290,30,30) 
        //  ctx.drawImage(blank,80,270,30,30)   
        //  ctx.drawImage(blank,70,230,30,30)
        //  ctx.drawImage(blank,70,190,30,30)    
        //  ctx.drawImage(blank,95,140,30,30) 
        //  ctx.drawImage(blank,125,120,30,30) 
        //  ctx.drawImage(blank,155,100,30,30)   
   
        // ctx.rect(60, 60, 300, 300);
        // ctx.rect(60, 60, 100, 100);
        // ctx.fillStyle = 'green';
        // ctx.fill()
      //  ctx.fillStyle="red";
//ctx.clearRect(90,90,230,230);
    
        
        }
            
       // console.log(this.state.toppings)
       // console.log(this.state.customizeTotal)
        
    }

    handleTomatoes=(e,canvas,img)=>{
 
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
            })
            const ctx = canvas.getContext("2d")
        
      //  img.onload = () => {
          //  ctx.drawImage(img, 90,90,230,230)
          ctx.drawImage(img,190,125,30,30)  // 25 add y
          ctx.drawImage(img,230,125,30,30)  // 25 add y
          ctx.drawImage(img,270,125,30,30)  // 25 add y  
          ctx.drawImage(img,310,145,30,30)  // 25 add y
          ctx.drawImage(img,325,160,30,30) //-25 from x
          ctx.drawImage(img,325,200,30,30) //-25 from x
         ctx.drawImage(img,325,240,30,30)  //-25 from x
         ctx.drawImage(img,315,270,30,30)  //-25 from x
         ctx.drawImage(img,265,310,30,30)  // -25 from x 
         ctx.drawImage(img,250,305,30,30)  // -25 from x   
         ctx.drawImage(img,220,305,30,30)  // -25 from y
         ctx.drawImage(img,180,305,30,30)  // -25 from y
         ctx.drawImage(img,140,305,30,30)  // -25 from y
         ctx.drawImage(img,115,285,30,30)  // -25 from y 
         ctx.drawImage(img,115,290,30,30)   // 25 add to x 
         ctx.drawImage(img,105,270,30,30)   // 25 add to  x 
         ctx.drawImage(img,95,230,30,30)    // 25 add to x 
         ctx.drawImage(img,95,190,30,30)    // 25 add to x
         ctx.drawImage(img,120,140,30,30)    // 25 add to x 
         ctx.drawImage(img,145,120,30,30)    // 25 add to x
         ctx.drawImage(img,155,125,30,30)    // 25 add to y
   
        }
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
    
        handleOnions=(e,canvas,img)=>{
 
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
                })
            
                const ctx = canvas.getContext("2d")
ctx.drawImage(img,190,150,30,30) // 25 add y
ctx.drawImage(img,230,150,30,30) // 25 add y
ctx.drawImage(img,270,150,30,30) // 25 add y
ctx.drawImage(img,310,170,30,30) // 25 add y
ctx.drawImage(img,300,160,30,30) //-25 from x
ctx.drawImage(img,300,200,30,30) //-25 from x
ctx.drawImage(img,300,240,30,30) //-25 from x
ctx.drawImage(img,290,270,30,30) //-25 from x
ctx.drawImage(img,240,310,30,30) // -25 from x
ctx.drawImage(img,225,305,30,30) // -25 from x
ctx.drawImage(img,220,285,30,30) // -25 from y
ctx.drawImage(img,180,280,30,30) // -25 from y
ctx.drawImage(img,140,280,30,30) // -25 from y
ctx.drawImage(img,115,260,30,30) // -25 from y
ctx.drawImage(img,140,290,30,30) // 25 add to x
ctx.drawImage(img,130,270,30,30) // 25 add to x
ctx.drawImage(img,120,230,30,30) // 25 add to x
ctx.drawImage(img,120,190,30,30) // 25 add to x
ctx.drawImage(img,145,140,30,30) // 25 add to x
ctx.drawImage(img,170,120,30,30) // 25 add to x
ctx.drawImage(img,155,150,30,30) // 25 add to y
            
            
            
            }
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
        
            handleGreenpeper=(e,canvas,img)=>{
 
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
                    })

                    const ctx = canvas.getContext("2d")

                    ctx.drawImage(img,190,175,30,30) // 25 add y
                    ctx.drawImage(img,230,175,30,30) // 25 add y
                        ctx.drawImage(img,270,175,30,30) // 25 add y
                        ctx.drawImage(img,310,195,30,30) // 25 add y
                        ctx.drawImage(img,275,160,30,30) //-25 from x
                        ctx.drawImage(img,275,200,30,30) //-25 from x
                        ctx.drawImage(img,275,240,30,30) //-25 from x
                        ctx.drawImage(img,265,270,30,30) //-25 from x
                        ctx.drawImage(img,215,310,30,30) // -25 from x
                        ctx.drawImage(img,200,305,30,30) // -25 from x
                        ctx.drawImage(img,220,260,30,30) // -25 from y
                        ctx.drawImage(img,180,255,30,30) // -25 from y
                        ctx.drawImage(img,140,255,30,30) // -25 from y
                        ctx.drawImage(img,115,235,30,30) // -25 from y
                        ctx.drawImage(img,165,290,30,30) // 25 add to x
                        ctx.drawImage(img,155,270,30,30) // 25 add to x
                        ctx.drawImage(img,145,230,30,30) // 25 add to x
                        ctx.drawImage(img,145,190,30,30) // 25 add to x
                        ctx.drawImage(img,170,140,30,30) // 25 add to x
                        ctx.drawImage(img,195,120,30,30) // 25 add to x
                        ctx.drawImage(img,180,150,30,30) // 25 add to y    
                
                
                }
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
                handlePeperoni=(e,canvas,img)=>{
 
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
                        })
                        const ctx = canvas.getContext("2d")
                        ctx.drawImage(img,190,200,30,30) // 25 add y
                        ctx.drawImage(img,230,200,30,30) // 25 add y
                        ctx.drawImage(img,270,200,30,30) // 25 add y
                        ctx.drawImage(img,310,220,30,30) // 25 add y
                        ctx.drawImage(img,250,160,30,30) //-25 from x
                        ctx.drawImage(img,250,200,30,30) //-25 from x
                        ctx.drawImage(img,250,240,30,30) //-25 from x
                        ctx.drawImage(img,240,270,30,30) //-25 from x
                        ctx.drawImage(img,190,310,30,30) // -25 from x
                        ctx.drawImage(img,175,305,30,30) // -25 from x
                        ctx.drawImage(img,220,235,30,30) // -25 from y
                        ctx.drawImage(img,180,230,30,30) // -25 from y
                        ctx.drawImage(img,140,230,30,30) // -25 from y
                        ctx.drawImage(img,115,210,30,30) // -25 from y
                        ctx.drawImage(img,190,290,30,30) // 25 add to x
                        ctx.drawImage(img,180,270,30,30) // 25 add to x
                        ctx.drawImage(img,170,230,30,30) // 25 add to x
                        ctx.drawImage(img,170,190,30,30) // 25 add to x
                        ctx.drawImage(img,195,140,30,30) // 25 add to x
                        ctx.drawImage(img,220,120,30,30) // 25 add to x
                        ctx.drawImage(img,180,175,30,30) // 25 add to y      
                    
                    
                    
                    }
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
                    handleSausage=(e,canvas,img)=>{
 
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
                            })
                            const ctx = canvas.getContext("2d")
                        ctx.drawImage(img,190,225,30,30) // 25 add y
                        ctx.drawImage(img,230,225,30,30) // 25 add y
                        ctx.drawImage(img,270,225,30,30) // 25 add y
                        ctx.drawImage(img,310,245,30,30) // 25 add y
                        ctx.drawImage(img,225,160,30,30) //-25 from x
                        ctx.drawImage(img,225,200,30,30) //-25 from x
                        ctx.drawImage(img,225,240,30,30) //-25 from x
                        ctx.drawImage(img,215,270,30,30) //-25 from x
                        ctx.drawImage(img,165,310,30,30) // -25 from x
                        ctx.drawImage(img,150,305,30,30) // -25 from x
                        ctx.drawImage(img,220,210,30,30) // -25 from y
                        ctx.drawImage(img,180,205,30,30) // -25 from y
                        ctx.drawImage(img,140,205,30,30) // -25 from y
                        ctx.drawImage(img,115,185,30,30) // -25 from y
                        ctx.drawImage(img,215,290,30,30) // 25 add to x
                        ctx.drawImage(img,205,270,30,30) // 25 add to x
                        ctx.drawImage(img,195,230,30,30) // 25 add to x
                        ctx.drawImage(img,195,190,30,30) // 25 add to x
                        ctx.drawImage(img,220,140,30,30) // 25 add to x
                        ctx.drawImage(img,245,120,30,30) // 25 add to x
                        ctx.drawImage(img,180,200,30,30) // 25 add to y
                        
                        
                        
                        
                        }
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

                        handleBeef=(e,canvas,img)=>{
 
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
                                })
                                const ctx = canvas.getContext("2d")

                                ctx.drawImage(img,190,250,30,30) // 25 add y
                                ctx.drawImage(img,230,250,30,30) // 25 add y
                                ctx.drawImage(img,270,250,30,30) // 25 add y
                                ctx.drawImage(img,310,270,30,30) // 25 add y
                                ctx.drawImage(img,200,160,30,30) //-25 from x
                                ctx.drawImage(img,200,200,30,30) //-25 from x
                                ctx.drawImage(img,200,240,30,30) //-25 from x
                                ctx.drawImage(img,190,270,30,30) //-25 from x
                                ctx.drawImage(img,140,310,30,30) // -25 from x
                                ctx.drawImage(img,125,305,30,30) // -25 from x
                                ctx.drawImage(img,220,185,30,30) // -25 from y
                                ctx.drawImage(img,180,180,30,30) // -25 from y
                                ctx.drawImage(img,140,180,30,30) // -25 from y
                                ctx.drawImage(img,115,160,30,30) // -25 from y
                                ctx.drawImage(img,240,290,30,30) // 25 add to x
                                ctx.drawImage(img,230,270,30,30) // 25 add to x
                                ctx.drawImage(img,220,230,30,30) // 25 add to x
                                ctx.drawImage(img,220,190,30,30) // 25 add to x
                                ctx.drawImage(img,245,140,30,30) // 25 add to x
                                ctx.drawImage(img,270,120,30,30) // 25 add to x
                                ctx.drawImage(img,180,225,30,30) // 25 add to y
                            
                            }
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
                            
                            handleChicken=(e,canvas,img)=>{
 
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
                                    })
                                    const ctx = canvas.getContext("2d")

                                    ctx.drawImage(img,190,275,30,30) // 25 add y
                                    ctx.drawImage(img,230,275,30,30) // 25 add y
                                    ctx.drawImage(img,270,275,30,30) // 25 add y
                                    ctx.drawImage(img,310,295,30,30) // 25 add y
                                    ctx.drawImage(img,175,160,30,30) //-25 from x
                                    ctx.drawImage(img,175,200,30,30) //-25 from x
                                    ctx.drawImage(img,175,240,30,30) //-25 from x
                                    ctx.drawImage(img,165,270,30,30) //-25 from x
                                    ctx.drawImage(img,115,310,30,30) // -25 from x
                                    ctx.drawImage(img,100,305,30,30) // -25 from x
                                    ctx.drawImage(img,220,160,30,30) // -25 from y
                                    ctx.drawImage(img,180,155,30,30) // -25 from y
                                    ctx.drawImage(img,140,155,30,30) // -25 from y
                                    ctx.drawImage(img,115,135,30,30) // -25 from y
                                    ctx.drawImage(img,265,290,30,30) // 25 add to x
                                    ctx.drawImage(img,255,270,30,30) // 25 add to x
                                    ctx.drawImage(img,245,230,30,30) // 25 add to x
                                    ctx.drawImage(img,245,190,30,30) // 25 add to x
                                    ctx.drawImage(img,270,140,30,30) // 25 add to x
                                    ctx.drawImage(img,295,120,30,30) // 25 add to x
                                    ctx.drawImage(img,180,250,30,30) // 25 add to y     
                                
                                
                                
                                
                                
                                }
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

<NavBar loginclick={this.handleLogin} sign={this.signup}/>

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
               if (this.state.condition == 5){
                return (
                <Signup submit={this.submit}/>    
                )   
           
           
                   }   

    }

}