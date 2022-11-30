// @ts-ignore

import styles from '../styles/modules/Stats.module.css'

const Stats = ({ classes, mistakes, characters, speed, time, accuracy }) => {
    return (
        <div className={`${styles.stats} ${classes === 'main' && styles.main}`}>
            <span className={styles.text}>Mistakes: {mistakes}</span>
            <span className={styles.text}>Characters: {characters}</span>
            <span className={styles.text}>Accuracy: {accuracy < 0 ? 0 : accuracy}%</span>
            <span className={styles.text}>Speed: {(!isNaN(speed) && isFinite(speed)) ? speed : 0} per minute</span>
            <span className={styles.text}>Time: {time} seconds</span>
        </div>
    )
}

export default Stats