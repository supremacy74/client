// @ts-ignore

import { useEffect } from 'react'

import styles from '../styles/modules/Result.module.css'

import Stats from './Stats'
import Close from './Close'

const Result = (
    {
        accuracy,
        time,
        speed,
        mistakes,
        characters,
        hidden,
        setHidden,
        setText,
        setMistakes,
        setDisabled,
        setSpeed,
        setTime,
        setAccuracy,
        setCharacters
    }
    ) => {

    const action = () => {
        setHidden(!hidden)
        setText('')
        setMistakes(0)
        setDisabled(false)
        setCharacters(0)
        setSpeed(0)
        setTime(0)
        setAccuracy(0)
    }

    return (
        <div className={`${styles.result} ${hidden ? styles.hidden : ''}`}>
            <div className={`container ${styles.container}`}>
                <Close classes={styles.close} onClick={action} />
                <h1 className={styles.heading}>Your result!</h1>
                <Stats
                    mistakes={mistakes}
                    characters={characters}
                    speed={speed}
                    time={time}
                    accuracy={accuracy}
                />
            </div>
        </div>
    )

}

export default Result