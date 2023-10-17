import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/slice";


export const rootReducer = combineReducers({
    contacts: contactsReducer,
})