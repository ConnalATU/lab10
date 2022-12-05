import React from "react";
import axios from "axios"; //importing axios

//created new component called create

export class Create extends React.Component {

    constructor(){
        //parent constructor with super
        super();
        // binding event to method
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangedElecCompany = this.onChangedElecCompany.bind(this);
        this.onChangedElecDate = this.onChangedElecDate.bind(this);
        this.onChangedElecUseage = this.onChangedElecUseage.bind(this);
        
       
        this.state = {
            company:'',
            date:'',
            useage:''
        }
    }



    // method when submit is clicked 
    handleSubmit(e){
        e.preventDefault();
        console.log(`button clicked 
        ${this.state.company}
        ${this.state.date}
        ${this.state.useage}`);
       
        //storing useage info
        const useage={
            company:this.state.company,
            date:this.state.date,
            useage:this.state.useage
    
        }
        //using axois for post method
        axios.post("http://localhost:4000/api/useage",useage)
        .then()
        .catch();
       
       
        this.setState({
            company:'',
            date:'',
            useage:''

            


        })
    
    }

    //method to change useage company in state
    onChangedElecCompany(e){
        this.setState({
        company:e.target.value})
    }

    //method to change useage date in state
    onChangedElecDate(e){
        this.setState({
            date:e.target.value})}

    //method to change useage in state
    onChangedElecUseage(e){
            this.setState({
            useage:e.target.value })}   


    


    render() {
        return (
            // submit form with using on click methods to handle data 
            <form onSubmit={this.handleSubmit}>
                
                <div className="form-group">
                    <label>Add company: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.company}
                        onChange={this.onChangedElecCompany}
                    />
                    <label>Add date: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.onChangedElecDate}
                    />
                    <label>Add useage: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.useage}
                        onChange={this.onChangedElecUseage}
                    />
                </div>

                <input type="submit" value="Add useage" />
            </form>
        );

    }
}
