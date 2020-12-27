import Images from "./Images";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";
import {loadimages} from "../redux/action";
import GetImage from "./GetImage";

function Main(){
    const img = useSelector(state=> state.images.image)
    const loading = useSelector(state=> state.images.loadImage)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadimages())
        },
        [])
    return(
        <div className="wrapper">
           <Header/>
            <div className="main">
                {loading ? "идет загрузка":
                    img.map(im => {
                            return(
                                <Images img={im} key={im.id}/>
                            )
                    })}
            </div>
            <GetImage/>
            <Footer/>
        </div>
    )
}
export default Main