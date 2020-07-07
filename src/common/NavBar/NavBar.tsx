import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

type NavBarTypes = {
    menuClickHandle: () => void,
    showNavBar: boolean
};

function NavBar({menuClickHandle, showNavBar}: NavBarTypes) {

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navBar__upperBlock}>
                    <i className="material-icons" onClick={() => {
                        menuClickHandle()
                    }}>{showNavBar ? "keyboard_arrow_right" : "keyboard_arrow_left"}</i>

                    <NavLink to="/" className={styles.link}>P</NavLink>
                    <NavLink to="/login" className={styles.link}>L</NavLink>
                    <NavLink to="/registration" className={styles.link}>R</NavLink>
                    <NavLink to="/forgot" className={styles.link}>F</NavLink>

                </div>
            </div>
            <div className={`${styles.navBarExtension} ${showNavBar && styles.navBarExtensionHide}`}>
                <div className={styles.navBarExtension__upperBlock}>
                    <div>Menu</div>
                    <NavLink to="/">Profile</NavLink>
                    <NavLink to="/">Login</NavLink>
                    <NavLink to="/">Registration</NavLink>
                    <NavLink to="/">Forgot password</NavLink>
                </div>
            </div>
        </>
    );
}

export default NavBar;