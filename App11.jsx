import React from 'react'
import axios from 'Axios'
class App11 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            local:[],
            records1:[],
            records2:[],
            arr:[]
        }
    }
    componentDidMount(){
        const one='http://localhost:4000/users';
        const apiurl='http://jsonplaceholder.typicode.com/users/';
        const two='https://api.github.com/users/hacktivist123/repos';
   
        axios.get(one)
        .then((response)=>{
            //console.log(response.data)
            this.setState({
                records:response.data
            })
            console.log(this.state.records)
        })
        .catch(error=>{
            console.log("ERROR")
        })

    }
     input(e) {
        //console.log(e.target.value);
        const arrr=this.state.records.filter(data=>(data.first_name.match(e.target.value))!=null);
        this.setState(
            {
             arr:arrr
            }
        )
        console.log(this.state.arr);
    }
    render(){
        return(
            <div>
            <input type="text" id='name' onInput={(e)=>this.input(e)}/>
                        <ul>
                        {this.state.arr.map(rec=><li>{rec.first_name}</li>)}
            </ul></div>
        )
    }
}

export default App11;
