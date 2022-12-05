import React from "react";
import Card from 'react-bootstrap/Card'; //importing bootsrap card
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from "axios";
//import Button from 'react-bootstrap/Button';

export class UseageItem extends React.Component {
    constructor(){
        super();
        this.DeleteEntry = this.DeleteEntry.bind(this);
    }
    //method for deleting entry for database using axios
    DeleteEntry(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/useage/' 
        +this.props.useage._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }
    render() {
        return (
            <div>
                {/* //reading json data from useage array
                    <h4>{this.props.useage.title}</h4>
                    <img src={this.props.useage.thumbnailUrl}></img>
                    <p>{this.props.useage.authors[0]}</p> */}

                {/* Card imported from bootstrap           */}
                <Card>
                    {/* Displaying data from mongodb           */}
                    <Card.Header>{this.props.useage.company}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <Card.Header>{this.props.useage.date}</Card.Header>
                            {/* <img src={this.props.useage.date} width="200" height="200"></img> */}
                            <footer>
                                {this.props.useage.useage}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.useage._id} className="btn btn-primary">Edit</Link>
                
                <Button variant="danger" onClick={this.DeleteEntry}>Delete</Button>
                </Card>
            </div>
        );
    }
}