export const loadimages = () => {
    return dispatch  =>{
        dispatch({type: "load/img/start"})
        fetch("https://boiling-refuge-66454.herokuapp.com/images").then((response)=>
        response.json())
            .then((json => {
                dispatch({
                    type:"load/img/success",
                    payload: json
                })
            }))
    }
}
export const loadImg = (id) => {
    return dispatch  =>{
        dispatch({type: "load/bg/start"})
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then((response)=>
            response.json())
            .then((json => {
                dispatch({
                    type:"load/bg/success",
                    payload: json
                })
            }))
    }
}