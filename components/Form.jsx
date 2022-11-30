// @ts-ignore

import axios from 'axios'

import { useState, useEffect } from 'react'

import styles from '../styles/modules/Form.module.css'

import Hint from './Hint'

import { useVisibility } from '../hooks'

const Form = ({ heading, options, button }) => {

    const [parameters, setParameters] = useState(Array(options.length).fill(''))

    const { visibility, show, hide } = useVisibility(options.length)

    const entries = (keys, values) => Object.fromEntries(keys.map((key, index) => [key, values[index]]))

    const post = async (url, keys) => {
        await axios({
            method: 'post',
            url,
            data: entries(keys, parameters)
        }).then(data => console.log(data))
    }

    const action = async button => {
        if (button === 'Sign Up') {
            await axios.get('http://localhost:5000/api/users').then(data => console.log(data))
            // await post('http://localhost:5000/api/registration', ['email', 'name', 'surname', 'password'])
        } else {
            await post('http://localhost:5000/api/authorization', ['email', 'password'])
        }
    }

    const setData = id => {
        setParameters(parameters.map((value, index) => id === index ? event.target.value : value))
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>{heading}</h1>
            <form className={styles.form}>
                {
                    options.map((option, index) => {
                        return (
                            <label key={index} className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    value={parameters[index]}
                                    placeholder={option.placeholder}
                                    onChange={event => setData(index)}
                                />
                                <span
                                    className={`${styles.prompt} ${option.hint && styles.visible}`}
                                    onMouseOver={() => show(index)}
                                    onMouseLeave={() => hide(index)}
                                >
                                    ?
                                </span>
                                <Hint hint={option.hint} visibility={visibility[index]} />
                            </label>
                        )
                    })
                }
            </form>
            <button className={styles.button} onClick={() => action(button)}>{button}</button>
        </div>
    )
}

export default Form