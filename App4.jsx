import React from "react"
class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    updateCount()
    {
        this.setState((prev,props) =>
        {
            return {
                count:prev.count+1
            }
        }

        )
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.updateCount()}/>
                <h1> {this.state.count}</h1>
            </div>
        );
    }
}

export default App4;