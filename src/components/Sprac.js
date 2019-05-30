import React from "react"
import List from "./List"



class Sprac extends React.Component{
    constructor(props){
        super(props);
        this.state =  { 
           gamers:  [  // created an array of objects 
                {id: 1, Games: "game1", cost: 60},
                {id: 2, Games: "game2", cost: 40},
                {id: 3,Games: "game3", cost: 20}
            ]
        }

    }

    render(){
        return(
            // created props for practice 
            // use map to allow access to the data from the state and allow to use 
            // -- with component List
            // use props in List.js to diplay the content
            <div>
                <h1>Name: {this.props.nameOf.name}</h1>  
                <h1>Age: {this.props.nameOf.age}</h1>
                <h1>
                    {this.state.gamers.map((games) => {
                        return (<List key = {games.id}cost = {games.cost}>{ games.Games }</List>)
                    })}
                </h1>
            </div>
        )
    }
}

export default Sprac