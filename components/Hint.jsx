// @ts-ignore

import styles from '../styles/modules/Hint.module.css'

const Hint = ({ hint, visibility, classes }) => {
    return (
        <div
            className={`${styles.hint} ${visibility && styles.visible} ${classes && classes}`}
        >
            {hint && hint}
        </div>
    )
}

export default Hint