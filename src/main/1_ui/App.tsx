import React, {useState} from 'react';
import styles from './App.module.css';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {Provider} from "react-redux";
import store from "../2_bll/redux-store";
import NavBar from "../../common/NavBar/NavBar";

const App = () =>  {

    const [showNavBar, setShowNavBar] = useState(true);

    const menuClickHandle = () => {
        setShowNavBar(!showNavBar);
    };

        return (
            <HashRouter>
                <Provider store={store}>
                <div className={styles.App}>
                    <NavBar
                        menuClickHandle={menuClickHandle}
                        showNavBar={showNavBar}
                    />
                    <Routes/>
                </div>
                </Provider>
            </HashRouter>
        );
};

export default App;
