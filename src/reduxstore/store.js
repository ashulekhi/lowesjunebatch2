import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";
import { Reducer1 as AuthReducer , Reducer2 as cartReducer} from "./reducers";


var store = configureStore({
    reducer : combineReducers({AuthReducer  , cartReducer})
})

export default store