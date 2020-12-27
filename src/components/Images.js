
import React from "react";
import {NavLink} from "react-router-dom";

function Images(props){
    return(
        <div className="img">
            <NavLink to={`/${props.img.id}`}>
                <img  className="img" src={props.img.url}/>
            </NavLink>
        </div>

    )
}
export default Images