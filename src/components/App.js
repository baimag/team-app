import "../style.css"
import Main from "./Main";
import { Route } from "react-router-dom";
import MainComment from "./MainComment";
import {useDispatch} from "react-redux";
import {loadimages} from "../redux/action";
import {useEffect} from "react";
export default App
function App() {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(loadimages());
        }, []);
    return(
        <div>

            <Route path="/">
                 <Main/>
            </Route>
           <Route path="/:id?">
               <MainComment/>
           </Route>
        </div>
           )
}