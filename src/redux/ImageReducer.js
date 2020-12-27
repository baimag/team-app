const initialState = {
    image:[],
    loadImage: false
}


const ImageReducer = (state=initialState, action) => {
    switch (action.type){
        case "load/img/start":
            return {
                ...state,
                loadImage: true
            }
        case "load/img/success":
            return {
                ...state,
                image: action.payload,
                loadImage: false
            }
        default:return state;
    }
}
export default ImageReducer