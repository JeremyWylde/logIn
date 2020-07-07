import React from 'react';
import styles from './Button.module.scss'

type ButtonProps = {
    color?: string,
    disabled?: boolean,
    onClick?: () => void,
    description?: string
}


const Button = ({color, disabled, onClick, description}: ButtonProps) => {

    return (
        <>
            <button
                className={`${styles.button}
                ${color === 'red' ? styles.red : styles.blue}
                ${disabled && styles.disabled}`}
                onClick={onClick}
                disabled={disabled}
            >
                {description}
            </button>
        </>
    );
};

export default Button;