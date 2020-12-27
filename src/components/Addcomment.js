import {useDispatch} from "react-redux";
import {setAddText} from "../redux/action";
import Button from "./Button";

function AddComment(props){
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setAddText(event.target.value))
    }
    dispatch(setAddText(props.image))
    return(
        <div  className="add_comment">
          <div className="com">
            <input type="text"
                   placeholder="Ваше имя"
                   onChange={handleChange}/>
          </div>
          <div>
            <input type="text"
                   placeholder="Ваш комментрий"
                   onChange={handleChange}/>
          </div>
            <Button/>
        </div>
    )
}
export default AddComment