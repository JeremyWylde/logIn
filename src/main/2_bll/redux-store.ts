import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {registerReducer} from "../../features/3_Registration/2_bll/registerReducer";
import {forgotReducer} from "../../features/4_Forgot/bll/forgot-reducer";
import {loginReducer} from "../../features/2_LogIn/2_bll/loginReducer";

let reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

export type storeType = ReturnType<typeof reducers>

