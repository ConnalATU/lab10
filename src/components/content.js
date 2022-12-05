import React from "react";
import Search from "./search";
import '../App.css';

//creating class to uses React Component that enables us to use JSX
export class Content extends React.Component {
    render() {
        return (
            <div className="contents">
                <h1> Hello world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <Search />
            </div>
                            

        );//end return
    }//end render 
}//end class 