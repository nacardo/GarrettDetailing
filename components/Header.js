import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";
const Header = () => {
    return (
        <div>
            <Link href="/">
                <Logo />
            </Link>
            {/* <Navbar /> */}
        </div>
    );
};

export default Header;
