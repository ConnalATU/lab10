import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [company, setCompany] = useState("");
    const [date, setDate] = useState("");
    const [useage, setuseage] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/useage/' + id)

            .then((response) => {
                // Assign Response data to the arrays using useState.
                setCompany(response.data.company);
                setDate(response.data.date);
                setuseage(response.data.useage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    //handles the edit submit when clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {
            id: id,
            company: company,
            date: date,
            useage: useage
        };
        axios.put('http://localhost:4000/api/useage/' + id, newEntry)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Company: </label>
                    <input type="text"
                        className="form-control"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Date: </label>
                    <input type="text"
                        className="form-control"

                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit useage: </label>
                    <input type="text"
                        className="form-control"
                        value={useage}
                        onChange={(e) => setuseage(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Useage" className="btn btn-primary"></input></div>
            </form>
        </div>
    );
}
