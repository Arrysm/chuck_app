import initialStore from "./initialStore";
import {END_LOADING, GET_JOKE_BY_TEXT, GET_RANDOM_CATEGORY_JOKE, GET_RANDOM_JOKE, START_LOADING} from "./actions";
import {combineReducers} from "redux";

export const jokeReducer = (store = initialStore, action) => {
    switch (action.type) {
        case GET_RANDOM_JOKE:
            return action.payload
        case GET_RANDOM_CATEGORY_JOKE:
            return action.payload
        case GET_JOKE_BY_TEXT:
            return action.payload
        default:
            return store
    }
}

export const loadingReducer = (store = initialStore, action) => {
    switch (action.type) {
        case START_LOADING:
            return action.payload
        case END_LOADING:
            return action.payload
        default:
            return store
    }
}

export const rootReducer = combineReducers({
    jokes: jokeReducer,
    loading: loadingReducer
})