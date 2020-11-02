import React from 'react'


class App15 extends React.Component{
    constructor(props){
        super(props)
        this.userName=React.createRef(); 
        this.pass=React.createRef();
        this.state={
            value:''
        }
    }

    handleSubmit(e){
        
        if(this.userName.current.value===""||this.pass.current.value==="")
        this.setState({value:'Please enter username or password'});
        else
        this.setState({value:'Success'});
    }

  render(){
      return(
      <div>
         
         Enter UserName <input type="text" ref={this.userName}></input>
         ENter Password<input type="password" ref={this.pass}></input>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        
        <h1> {this.state.value}</h1>
      </div>)
  }
}

export default App15
