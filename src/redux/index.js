
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import ImageReducer from "./ImageReducer";
import CommentReducer from "./CommentReducer";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    images: ImageReducer,
    comments: CommentReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
