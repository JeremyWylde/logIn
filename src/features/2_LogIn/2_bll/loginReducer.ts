import {AuthorizationAPI} from "../3_dal/loginApi";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {storeType} from "../../../main/2_bll/redux-store";

export type initialStateType = {
    success: boolean,
    error: string,
    isThereToken: boolean
}

const initialState: initialStateType = {
    success: false,
    error: '',
    isThereToken: false
};

export const loginReducer = (state = initialState, action: actionTypes): initialStateType => {
    switch (action.type) {
        case SET_SUCCESS:
            return {
                ...state,
                success: action.success,
                error: ''
            };

        case SET_ERROR:
            return {
                ...state,
                success: false,
                error: action.error
            };
        case SET_TOKEN:
            return {
                ...state,
                isThereToken: action.isThereToken
            };
        default:
            return state
    }
};

const SET_SUCCESS = 'SET_SUCCESS';
const SET_ERROR = 'SET_ERROR';
const SET_TOKEN = 'SET_TOKEN';

type actionTypes = setSuccessAction | setErrorAction | setTokenAction

type setSuccessAction = {
    type: typeof SET_SUCCESS,
    success: boolean
};

type setErrorAction = {
    type: typeof SET_ERROR,
    error: string
}

type setTokenAction = {
    type: typeof SET_TOKEN,
    isThereToken: boolean
}

export const setSuccessAC = (success: boolean): setSuccessAction => ({
    type: SET_SUCCESS,
    success
});

const setErrorAC = (error: string): setErrorAction => ({
    type: SET_ERROR,
    error
});

export const setTokenAC = (isThereToken: boolean): setTokenAction => ({
    type: SET_TOKEN,
    isThereToken
});

export const LoginThunk = (email: string | null, password: string | null, rememberMe: boolean | null)
    : ThunkAction<Promise<void>, storeType, unknown, actionTypes> => {
    return async (dispatch: ThunkDispatch<storeType, unknown, actionTypes>) => {
       try {
           let response = await AuthorizationAPI.login(email, password, rememberMe);
           document.cookie = `${response.data.token}; max-age=3600`;
           dispatch(setSuccessAC(true));
       }
       catch (e) {
           const err = e.response.data.error;
           dispatch(setErrorAC(err));
       }
    }
};

export const authThunk = () => async (dispatch: ThunkDispatch<storeType, unknown, actionTypes>) => {
    try {
        const response = await AuthorizationAPI.authMe();
        dispatch(setTokenAC(true));
        document.cookie = `${response.data.token}; max-age=3600`

    } catch (e) {
        dispatch(setTokenAC(false));
    }
};

export default loginReducer;