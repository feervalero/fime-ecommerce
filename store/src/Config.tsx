import React from 'react'
import logo from './logo.svg';
import axios from "axios";


class Config extends React.Component {
    
    
    state ={
        sku:"",
        name:"",
        price:"",
        products: Array<string>()

    }

    componentDidMount= ()=>{
        this.getProducts();
    }

    getProducts =() =>{
        axios.get("/api").then((data)=>this.setState({products:data.data}))
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

    displayProductList =(products:Array<any>)=>{
        if(!products.length) return null;
        return products.map((p)=>(
            <li>{p.name}</li>
        ))
    }

    render(){
        console.log(this.state)
        return (
            <>
            <div>
                <ul>
                    {this.displayProductList(this.state.products)}
                </ul>
            </div>
            <div className="App">
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Enter sku" name="sku" value={this.state.sku} onChange={this.changeHandler}/><br></br>
                    <input type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.changeHandler}/><br></br>
                    <input type="text" placeholder="Enter price" name="price" value={this.state.price} onChange={this.changeHandler} /><br></br>
                    <button>SAVE</button>
                </form>
            </div>
            </>
        )
    }
}

export default Config;