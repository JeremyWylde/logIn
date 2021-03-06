import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Login.module.scss";
import {Redirect} from "react-router-dom";
import {storeType} from "../../../main/2_bll/redux-store";
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {authThunk, LoginThunk} from "../2_bll/loginReducer";


const Login = () => {

    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [rememberMe, setRememberMe] = useState<boolean>(false);

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
        [setEmail]
    );

    const setPasswordCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        [setPassword]
    );

    const setRememberMeCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked),
        [setRememberMe]
    );

    let dispatch = useDispatch();
    const loginCallback = useCallback(() =>{
            dispatch(LoginThunk(email, password, rememberMe))},
        [email, password, rememberMe, dispatch]
    );

    const {success, error, isThereToken} = useSelector((store:storeType) => store.login);

    useEffect(() => {
        if (!isThereToken && document.cookie) {
            dispatch(authThunk());
        }
    }, [dispatch, isThereToken]);


    if((success && error === '') || (isThereToken && document.cookie)){

        return <Redirect to='/'/>;
    }



    return (
        <div className={styles.wrapper}>
            <div>
                <Input placeholder={'Email'} value={email} onChange={setEmailCallback}/>
            </div>
            <div>
                <Input placeholder={'password'} type={"password"} value={password} onChange={setPasswordCallback}/>
            </div>
            <div>
                <Input type={"checkbox"} onChange={setRememberMeCallback}/>
            </div>
            <div>
                <Button description={'Login'} onClick={loginCallback}/>
                {error && <div className={styles.message}>{error}</div>}
            </div>
        </div>
    );
};


export default Login;