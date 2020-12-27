function Comments(props){

    return (
        <div>
            {props.image.comments.map(item => {
                    return (
                        <div key={props.image.id}>
                            <div>
                                {item.date}
                            </div>
                            <div>
                                {item.text}
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}
export default Comments