import React from "react";
import Search from "./search";

//creating class to uses React Component that enables us to use JSX
export class Header extends React.Component {
    //render method
    render() {
        return (
            <div>
                <h1>My Header in a component</h1>
                <Search />

            </div>
        );//end return
    }//end render 
}//end class 