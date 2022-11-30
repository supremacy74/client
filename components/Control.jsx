// @ts-ignore

import { useEffect, useState } from 'react'

import Image from 'next/image'

import styles from '../styles/modules/Control.module.css'

import { useVisibility } from '../hooks'

import blur from '../public/images/blur.svg'
import dark from '../public/images/dark.svg'
import light from '../public/images/light.svg'

import Handler from './Handler'
import Hint from './Hint'

const Control = ({ handlers }) => {

    const { visibility, show, hide } = useVisibility(handlers.length)

    return (
        <div className={styles.panel}>
            <div className={styles.block}>
                {
                    handlers.map((handler, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <Handler
                                    value={handler.value}
                                    state={handler.state}
                                    setState={handler.setState}
                                    onMouseOver={() => show(index)}
                                    onMouseLeave={() => hide()}
                                />
                                { /* <Hint hint="hint" visibility={visibility[index]} classes={styles.hint} /> */ }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Control