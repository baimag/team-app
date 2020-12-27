const initialState = {
    items:{},
    loadItems:false,
    textOriginal: "",
    textAdd: ""
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
        case "add/set": return {
            ...state,
            textAdd: action.payload
        }
        default:return state;
    }
}
export default CommentReducer