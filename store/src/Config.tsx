import React from 'react'
import logo from './logo.svg';
import axios from "axios";
class Config extends React.Component {
    
    state ={
        sku:"",
        name:"",
        price:""

    }

    changeHandler= ({target}:any)=>{
        const{name, value} = target;
       
        this.setState({
            [name]:value
        });

    }

    submit = (event:any) =>{
        event.preventDefault();


        const payload = {
            sku:this.state.sku,
            name:this.state.name,
            price:this.state.price    
        }

        axios({
            url:"/api/save",
            method:"POST",
            data:payload
        }).then(()=>console.log("data saved"))
        .catch(error=>console.log(error));
    }

    render(){
        console.log(this.state)

        return (
            <div className="App">
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Enter sku" name="sku" value={this.state.sku} onChange={this.changeHandler}/><br></br>
                    <input type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.changeHandler}/><br></br>
                    <input type="text" placeholder="Enter price" name="price" value={this.state.price} onChange={this.changeHandler} /><br></br>
                    <button>SAVE</button>
                </form>
            </div>
        )
    }
}

export default Config;