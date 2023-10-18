import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filter/slice";


export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
})