import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Header.module.scss";
import React, { useState } from "react";
import { ReactElement } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    const [click, setClick] = useState(false);
    const bars = (
        <FontAwesomeIcon className={styles.navIcon} icon={faBars} size="1x" />
    );
    const times = (
        <FontAwesomeIcon className={styles.navIcon} icon={faTimes} size="1x" />
    );

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div
                className={click ? "main-container" : ""}
                onClick={() => Close()}
            />
            <nav className="nav-bar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                exact
                                href={"/"}
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href={"/services"}
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href={"/"}
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Book Online
                            </Link>
                        </li>
                    </ul>
                    {/* <div className={styles.navIcon} onClick={handleClick}>

                        {click ? times : bars}
                    </div> 
                    */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
