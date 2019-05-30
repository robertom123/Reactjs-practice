import React from "react"
import Plist from "./Plist"

class Prac1 extends React.Component{
    constructor(){
    super();
    this.state = {
        grocery: [
            {id:1, fruit: "apple", price: 200 },
            {id:2, fruit: "orange", price: 300 },
            {id:3, fruit: "grape", price: 400 }

        ]
    }

    }
    render(){
        //Differnt way of setting up the Plist content from Sprac
        return(
            <div>
                <h1>Who is this: {this.props.sess.prac}</h1>
                <h1>The session is: {this.props.sess.num}</h1>
                <h1>
                    {this.state.grocery.map((food) => {
                    return <Plist key = {food.id} bought={food.fruit} cost = {food.price}/>
                    })}
                </h1>
            </div>
        )
    }
}

export default Prac1