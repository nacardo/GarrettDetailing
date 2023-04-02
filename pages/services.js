import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Services.module.scss";

const services = () => {
    return (
        <div className={styles.grid}>
            <div></div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default services;
