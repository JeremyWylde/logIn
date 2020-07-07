import React, {ChangeEvent} from 'react';
import styles from './Input.module.scss'

type inputPropsType = {
    type?: string,
    placeholder?: string,
    onClick?: () => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    value?: string
};

const Input = ({type, placeholder, onClick,
                   onChange, value}: inputPropsType) => {

    return (
        <>
            <input type={type ? type : "text"} placeholder={placeholder} className={styles.input} onClick={onClick}
                   onChange={onChange} value={value}/>
        </>
    );
};

export default Input;