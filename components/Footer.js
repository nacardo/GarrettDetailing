import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        // <footer className={styles.footer}>
        //   <hr />
        //   <ul className={styles.navItems}>
        //     <li className={styles.navItem}>
        //       <a href="https://next-auth.js.org">Documentation</a>
        //     </li>
        //     <li className={styles.navItem}>
        //       <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        //     </li>
        //     <li className={styles.navItem}>
        //       <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        //     </li>
        //     <li className={styles.navItem}>
        //       <Link href="/policy">Policy</Link>
        //     </li>
        //     <li className={styles.navItem}>
        //       <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        //     </li>
        //   </ul>
        // </footer>
        <footer className={styles.homeFooter}>
            <div className="info">
                <p>2023 © Garrett Detailing - Sullivan, MO (573)259-4539</p>
            </div>
            <div className={styles.links}>
                <Link
                    href={
                        "https://www.facebook.com/people/Garrett-Detailing/100090699856233/"
                    }
                    passHref
                >
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className={`${styles.facebook} ${styles.icons}`}
                    />
                </Link>
                <Link
                    href={"https://www.instagram.com/"}
                    className={`${styles.instagram} ${styles.icons}`}
                    passHref
                >
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </Link>
            </div>
        </footer>
    );
}
