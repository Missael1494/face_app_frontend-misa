import { combineReducers } from "redux";
import authReducer from './authReducer'
//import conversationsReducer from './conversationsReducer'
//import alertaReducer from './alertaReducer'



export default combineReducers({
    auth: authReducer,
    //conversations: conversationsReducer,
    //alerta: alertaReducer

})