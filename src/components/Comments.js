function Comments(props){

    return (
        <div className="commentUsers">
            {props.params !== props.image.id ? "" :
                props.image.comments.map(item => {
                    return (
                        <div key={props.image.id}>
                            <div className="ext">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>
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