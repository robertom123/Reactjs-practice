import React from "react"

class Prac2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        console.log(props)
    }

    render(){
        return(
            <div>
                <h3>
                   Color is: {this.props.hue}
                </h3>

                <h3>
                   The thing is: {this.props.misc}                   
                </h3>
            </div>
        )
    }
}

export default Prac2