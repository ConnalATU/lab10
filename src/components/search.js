import React, { useEffect, useState } from "react";
import {BsSearch} from "react-icons/bs"
import axios from "axios";
import '../App.css';

export default function Search(){
    const[searchResult, setSearchResult] = useState([])
    const[key, setKey] = useState("")
    useEffect(()=>{
        const search = async () => {
            try{
                if (!key.trim()){
                    setSearchResult([])
                    return
                }
                const res =await axios.get("http://localhost:4000/api/useageb",{params:{key}})
                setSearchResult(res.data.data)
                console.log(res)
            }catch(error){
                console.log(error)
            }
            }
            search()
        },[key])

    
    return (
        <form>

            <div className="search-wrapper">
            {/* <button className="search-btn"><BsSearch/></button> */}

            <div className="form-group">

            <input
            type="text"
            className="form-control"
            placeholder="Searching..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
            />

            </div>
            {searchResult && searchResult.length > 0 && (
                <div className="search-result">
                    {searchResult.map(useage => (
                        <div className="result-item" key={useage._id}>
                            <div className ="img">
                                <img src={useage.imageUrl} alt=""/>
                                </div>
                                <div className="useage-info">
                                    <p className="name">{useage.company}</p>
                                    <p>{useage.date}</p>
                                    <p>{useage.useage}</p>
                            </div>
                            </div>
                    ))}
            
            </div>
)}
</div>
        </form>
    );
}




