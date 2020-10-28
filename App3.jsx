import React from "react"
import PropsTypes from 'prop-types'
function App3(){
    return <Greeting name="Eshan" age={20} occupation="STudent"/>
}


function Greeting(props){
    return(
        <p>
            Hello I'm {props.name}, a{props.age} years old {props.occupation}
        </p>
    )
}

Greeting.prototype={
    name: PropsTypes.string.isRequired,
    age:PropsTypes.number.isRequired,
    occupation:PropsTypes.string.isRequired
}
export default App3;