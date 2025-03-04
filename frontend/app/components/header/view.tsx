import styles from ".././../page.module.css";
import React from "react";
import Image from "next/image";


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoTitleDiv}>
                <Image src="/White Logo.PNG" alt="Logo" width={50} height={50} />
                <h1 className={styles.title}>News Analysis Bot</h1>
            </div>
            <div className={styles.subtitleDiv}>
                <p className={styles.subtitle}>Breaking News, Simplified</p>
            </div>
        </header>
    );
};

export default Header;