import React from "react"
class App6 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        };

    }
         increment(){
            this.setState({
                count : this.state.count+1
            });
        };
        
        decrement(){
            this.setState({
                count : this.state.count-1
            });
        };

    

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
                {this.state.count}
            </div>
        )
    }
  
}

export default App6;
