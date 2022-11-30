// @ts-ignore

import Image from 'next/image'

import styles from '../styles/modules/Close.module.css'

import close from '../public/images/close.svg'

const Close = ({ classes, onClick }) => {
    return (
        <button className={`${styles.close} ${classes}`} onClick={onClick}>
            <Image className={styles.image} src={close} alt="Close button." />
        </button>
    )
}

export default Close