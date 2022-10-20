import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {contactReducer} from "./contactReducer"
import { editReducer } from "./editReducer";

const rootReducer = combineReducers({authReducer,contactReducer,editReducer})

export default rootReducer