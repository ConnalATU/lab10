import React from "react";
import { UseageItem } from "./UseageItem"; //importing useageItem

export class Useage extends React.Component {

    render() {
        //will use built in map to display useage
        return this.props.useage.map((useage) => {
            //returning useage by id
            return <UseageItem useage={useage} key={useage._id} ReloadData={this.props.ReloadData}> </UseageItem>
        }
        );
    }
}