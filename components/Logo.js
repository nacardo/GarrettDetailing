import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logoWide from "../public/logo_trans.png";

const Logo = () => {
    return (
        <Image
            alt="logo for garrett detailing"
            src={logoWide}
            sizes="100vw"
            className={styles.logo}
        ></Image>
    );
};

export default Logo;
