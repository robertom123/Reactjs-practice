import React from "react"

const Plist = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Name of Food: {props.bought}</h1>
            <h1>Price of Food: {props.cost} </h1>
            
        </div>
    )
}
export default Plist