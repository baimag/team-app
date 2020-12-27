const initialState = {
    items:{},
    loadItems:false
}

const CommentReducer = (state = initialState, action) => {
    switch (action.type){
        case "load/bg/start":
            return {
                ...state,
                loadItems: true
            }
        case "load/bg/success":
            return {
            ...state,
            items: action.payload,
            loadItems: false
        }
        default:return state;
    }
}
export default CommentReducer