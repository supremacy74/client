// @ts-ignore

import styles from '../styles/modules/Handler.module.css'

const Handler = ({ value, state, setState, onMouseOver, onMouseLeave }) => {

    return (
        <button
            className={`${styles.button} ${state && styles.active}`}
            onClick={() => setState(!state)}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {value}
        </button>
    )

}

export default Handler