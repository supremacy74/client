// @ts-ignore

import { useEffect, useMemo, useRef, useState } from 'react'

import styles from '../styles/modules/Board.module.css'

import Result from './Result'

const Board = (
    {
        templates,
        isEnlarged,
        setIsEnlarged,
        isBlur,
        setIsBlur,
        accuracy,
        setAccuracy,
        time,
        setTime,
        speed,
        setSpeed,
        characters,
        setCharacters,
        mistakes,
        setMistakes
    }
    ) => {

    const area = useRef(null)

    const [piece, setPiece] = useState('')
    const [template, setTemplate] = useState([])
    const [text, setText] = useState('')
    const [length, setLength] = useState(0)
    const [wrong, setWrong] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const [timer, setTimer] = useState(null)
    const [key, setKey] = useState('')
    const [blur, setBlur] = useState(false)
    const [enlarged, setEnlarged] = useState(false)

    let seconds = 0
    
    const focus = () => {
        area && area.current.focus()
    }

    useEffect(() => {

        text.length > 0 && setBlur(!blur)

        focus()

    }, [isBlur])

    useEffect(() => {

        text.length > 0 && setEnlarged(!enlarged)

        focus()

    }, [isEnlarged])

    useEffect(() => {
        setTemplate(templates[Math.floor(Math.random() * templates.length)])
        setLength(template && template.length)
    }, [templates])

    useEffect(() => {
        focus()
    }, [hidden])

    useEffect(() => {

        if (text.length === 1 && !timer) {
            setTimer(setInterval(() => {

                seconds += 1

                setTime(seconds)

            }, 1000))
        }

    }, [text])

    useEffect(() => setSpeed((characters / (time / 60)).toFixed(2)), [time])

    const action = value => {

        if (template.content.startsWith(value)) {

            isBlur && setBlur(true)
            isEnlarged && setEnlarged(true)

            setWrong(false)
            setText(value)
            setLength(template.content.length)
            setSpeed((characters / (time / 60)).toFixed(2))
            setAccuracy((100 * (value.length - mistakes) / value.length).toFixed(2))
            setCharacters(value.length)

            if (value.length === template.content.length) {

                isBlur && setBlur(false)
                isEnlarged && setEnlarged(false)

                setHidden(false)
                setDisabled(true)
                setTimer(null)

                clearInterval(timer)

            }

        } else {

            setPiece(value)
            setWrong(true)

            piece.slice(0, -1) !== value.slice(0, -1) && setMistakes(mistakes + 1)

        }

    }

    return (
        <div className={`${styles.layout} ${styles.template}`}>
            <Result
                accuracy={accuracy}
                time={time}
                speed={speed}
                mistakes={mistakes}
                characters={characters}
                hidden={hidden}
                setHidden={setHidden}
                setText={setText}
                setMistakes={setMistakes}
                setDisabled={setDisabled}
                setSpeed={setSpeed}
                setTime={setTime}
                setAccuracy={setAccuracy}
                setCharacters={setCharacters}
            />
            <p className={`${styles.text} ${enlarged ? styles.enlarged : ''}`}>{template && template.content}</p>
            <textarea
                ref={area}
                disabled={disabled}
                value={text}
                maxLength={length}
                className={`${styles.layout} ${styles.area} ${wrong ? styles.wrong : ''} ${enlarged ? styles.enlarged : ''}`}
                onKeyDown={event => setKey(event.key)}
                onChange={event => key !== 'Backspace' && action(event.target.value)}
            />
            <div className={blur ? styles.blur : ''}></div>
        </div>
    )

}

export default Board