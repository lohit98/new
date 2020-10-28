import React from 'react';

class App10 extends React.Component{
    constructor(props){
        const count=[];
        super(props)
        this.state={
            count,
            index :-1
        }

    }

    // componentDidMount(){
    //     this.timer=setInterval(this.timerTick,1000)
    //     console.log("Component has mounted")
    // }

    // componentDidUpdate(prevProps,prevState){
    //     console.log("Component updated from ",+prevState.count)
    // }
    Update()
    {
        console.log(this.state.count);
        this.setState((prevState)=>{
            return{
                count:prevState.count.concat(document.getElementById('name').value),
                index :prevState.index+1
              }
           })

    }

    render(){
        return(   
            <div>
           <input type='text' id='name'/>
           <button onClick={()=>this.Update()}>click</button>
        <h2>{this.state.count[this.state.index-1]}</h2>
               
           </div>

        )
    }

}

export default App10;
