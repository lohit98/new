import React from 'react';

class App9 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }

        this.timerTick=this.timerTick.bind(this)

    }

    timerTick(){
      this.setState((prevState)=>{
          return{
              count:prevState.count+1
            }
         })
    }

    componentDidMount(){
        this.timer=setInterval(this.timerTick,1000)
        console.log("Component has mounted")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component updated from ",+prevState.count)
    }

    render(){
        return(   
           <h1>{this.state.count}</h1>

        )
    }

}

export default App9;
