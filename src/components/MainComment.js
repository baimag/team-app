import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {loadImg} from "../redux/action";
import Comment from "./Comment";

function MainComment () {
    const image = useSelector(store=>store.comments.items)
    const dispatch = useDispatch()
    const params = useParams().id
    const loading = useSelector(state => state.comments.loadItems);
    useEffect(() => {
        if(params !== undefined) {
            dispatch(loadImg(params));
        }
    }, [params]);
    {if(loading) {
        return <h2>загрузка</h2>
    }
    return(
        <div className={`commentMain ${parseInt(params) === image.id ? "active" : ""}`}>
        <Comment  key={image.id} image={image} />
        </div>
    )}
}
export default MainComment


