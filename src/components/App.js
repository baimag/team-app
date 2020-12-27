import "../style.css"
import Main from "./Main";
import { Route } from "react-router-dom";
import MainComment from "./MainComment";
export default App
function App() {
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