import {useDispatch} from "react-redux";
import {makeFavorite, removePhoto} from "../redux/actions";

function MainContent(props) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(removePhoto(id));
    }
    const handleCheck = (id) => {
        dispatch(makeFavorite(id));
    }
    return(
        <ul className="mainContent">
            <li>
              <input onClick={() => handleCheck(props.todo.id, props.todo.title)} type="checkbox"/>  {props.todo.title} <span className="delete" onClick={() => handleDelete(props.todo.id)}>❌</span>
            </li>
        </ul>
    )
}
export default MainContent