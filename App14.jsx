import React from 'react'
import ReactDOM from 'react-dom'
class App14 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
        this.updateState=this.updateState.bind(this)
        this.clearInput=this.clearInput.bind(this)
    }
    updateState(e){
        console.log("update state is called")
        this.setState({data:e.target.value})
    }

    clearInput(){
        console.log("clearInput is called")
        this.setState({data:''})
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }


    render(){   
        return(
        <div>
            Enter text here <input type="text" value={this.state.data} ref="myInput" onInput={this.updateState}></input>
            <button onClick={this.clearInput}>CLEAR INPUT</button>
            <h1>{this.state.data}</h1>


        </div>);
    }
}


export default App14;