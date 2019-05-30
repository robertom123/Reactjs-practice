import React from "react"
import Sprac from "./components/Sprac"
import Prac1 from "./Practice/Prac1"
import Items from "./Items"
import Prac2 from "./Practice/Prac2"

class App extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    const stuff = Items.map((item) => {
      return(<Prac2 key = {item.id} hue = {item.color} misc = {item.thing}  />)
    })

    return(
      <div>        
        <Sprac nameOf = {{name:"bert", age:28}}/>
        <hr/>
        <Prac1 sess = {{prac: "Berto", num: 1}}/>
        <hr/>
        <h1>
          {stuff}
        </h1>
      </div>
    )
  }
}

export default App;
