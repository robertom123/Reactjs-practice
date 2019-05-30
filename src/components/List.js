import React from "react"

const List = (props) => {
    return( 
    <ul>
        
        game: {props.children} , Cost: {props.cost}
    </ul>
    )
}

export default List