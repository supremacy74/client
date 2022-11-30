// @ts-ignore

import Link from 'next/link'

import styles from '../styles/modules/Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={`${styles.navigation} ${styles.visible}`}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} href="/">train</Link>
                </li>
            </ul>
            <hr className={styles.line} />
            <ul className={styles.list}>
                <li>
                    <Link href="/authorization" legacyBehavior>
                        <a className={`${styles.link} ${styles.auth}`}>sign in</a>
                    </Link>
                </li>
                <li>
                    <Link href="/registration" legacyBehavior>
                        <a className={`${styles.link} ${styles.auth}`}>sign up</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation