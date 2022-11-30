// @ts-ignore

import styles from '../styles/modules/Header.module.css'

import Logo from './Logo'
import Navigation from './Navigation'

import Image from 'next/image'

import light from '../public/images/light.svg'
import dark from '../public/images/dark.svg'

const Header = ({ mode, setMode }) => {

    const action = () => {

        setMode(mode === 'dark' ? 'light' : 'dark')

        localStorage.setItem('mode', mode === 'dark' ? 'light' : 'dark')

    }

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Logo />
                <div className={styles.division}>
                    <Navigation />
                    <button onClick={() => action()}>
                        <Image
                            className={styles.mode}
                            src={mode === 'dark' ? light : dark}
                            alt="Color theme.">
                        </Image>
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header