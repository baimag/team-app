import React from "react";

function GetImage(props) {
    return(
    <div className="bigimg">
        <img  src={props.image.url} alt={"404"}/>
    </div>
    )
}
export default GetImage