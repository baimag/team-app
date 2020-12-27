import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {loadImg} from "../redux/action";
import Comment from "./Comment";

function MainComment () {
    const image = useSelector(store=>store.comments.items)
    const dispatch = useDispatch()
    const params = useParams().id
    useEffect(() => {
        if(params !== undefined) {
            dispatch(loadImg(params));
        }
    }, [params]);
    return(
        <Comment image={image} />
    )
}
export default MainComment


