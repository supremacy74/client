// @ts-ignore

import Image from 'next/image'

import styles from '../styles/modules/Logo.module.css'

import logo from '../public/images/logo.svg'

const Logo = () => {
    return (
        <a href="/" className={styles.logo}>
            <Image className={styles.image} src={logo} priority alt="Logo."></Image>
        </a>
    )
}

export default Logo