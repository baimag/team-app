import {useParams} from "react-router-dom";
import React from "react";
import GetImage from "./GetImage";
import Comments from "./Comments";
import {useSelector} from "react-redux";


function Comment(props) {
    const loading = useSelector(state => state.comments.loadItems)
    const params = parseInt(useParams().id);
    return(
        loading ? "идет загрузка" :
            <div>
                <GetImage image={props.image}/>
                <Comments image={props.image} params={params}/>
            </div>

    )
}
export default Comment