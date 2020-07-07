import React, {useEffect} from 'react';
import styles from './Profile.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {storeType} from "../../../main/2_bll/redux-store";
import Button from "../../../common/button/Button";
import {authThunk, setSuccessAC, setTokenAC} from "../../2_LogIn/2_bll/loginReducer";


const Profile = () => {

    const {isThereToken, success} = useSelector((store: storeType) => store.login);

    let dispatch = useDispatch();
    useEffect(() => {
        if(document.cookie && !isThereToken)
            dispatch(authThunk());
    }, [dispatch, isThereToken]);

    const deleteToken = () => {
        document.cookie = `${document.cookie}; max-age=-1`;
        dispatch(setTokenAC(false));
        dispatch(setSuccessAC(false))
    };

    if(!isThereToken && !document.cookie && !success)
        return <Redirect to='/login'/>;

    return (
        <div className={styles.wrapper}>
            Profile
            <div className={styles.introduction}>
                <div>
                    <Button description={'Log Out'} color={'red'} onClick={deleteToken}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;