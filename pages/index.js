import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import wallpaper from "../public/wallpaper.jpg";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Garrett Detailing</title>
                <meta
                    name="description"
                    content="website for car detailing business"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {/* <Image
                    alt="wallpaper for garrett detailing"
                    src={wallpaper}
                    sizes="100vw"
                    className={styles.wallpaper}
                ></Image> */}
            </main>
        </div>
    );
}
