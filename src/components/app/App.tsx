import { Classes } from "@blueprintjs/core";
import { Flow } from "components/flow";
import { Navbar } from "components/navbar";
import React from "react";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <div className={`${Classes.DARK} ${styles.app}`}>
            <Navbar />
            <Flow height="calc(100vh - 50px)" />
        </div>
    );
};
