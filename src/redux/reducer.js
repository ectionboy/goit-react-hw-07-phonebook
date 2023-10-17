import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/slice";
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
  }
   
  const persistedReducer = persistReducer(persistConfig, contactsReducer)


export const rootReducer = combineReducers({
    contacts: persistedReducer,
})