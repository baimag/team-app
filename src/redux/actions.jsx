export const loadTodos = () =>{
    return function (dispatch){
        dispatch({type: "load/todo/start"})
        fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>
            response.json()).then((json=>{
            dispatch({
                type:"load/todo/success",
                payload: json
            })
        }))
    }
}
