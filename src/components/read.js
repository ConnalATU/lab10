import React from "react";
import { Useage } from "./Useage";
import axios from "axios"; //importing axios


export class Read extends React.Component {
    //constructor for reloading data
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }


    //method to reload data instead of clicking refresh 
    ReloadData(){
        axios.get('http://localhost:4000/api/useage')
        .then((response)=>{
            this.setState({useage:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }




    //life cycle hook
    componentDidMount() {
        //axios is a http client that we use to send and recieve http request with a promise 
        axios.get('http://localhost:4000/api/useage') //json data url
            .then((response) => {
                this.setState({ useage: response.data }) //setting data into state from request
            })
            .catch((error) => {
                console.log(error); //error handling 
            })

    }


    state = {
        //creating array called useage
        useage: []

    }
    render() {
        return (
            <div>
                <h3>This is the Read Component</h3>
                {/* Displaying Component */}
                <Useage useage={this.state.useage }ReloadData ={this.ReloadData}></Useage>
            </div>
        );

    }
}
