import React from "react";
import AddComment from "./Addcomment";

function GetImage(props) {
    return(
    <div className="bigimg">
        <img  className="bg" src={props.image.url} alt="none"/>
        <AddComment mage={props.image}/>
    </div>
    )
}
export default GetImage