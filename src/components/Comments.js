import {NavLink} from "react-router-dom";

function Comments(props){

    return (
        <div className="commentUsers">
            {props.params !== props.image.id ? "" :
                props.image.comments.map(item => {
                    return (
                        <div className="www" key={props.image.id}>
                            <div className="data">
                                {item.date}
                            </div>
                            <div className="comments">
                                {item.text}
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}
export default Comments