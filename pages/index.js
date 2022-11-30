import axios from 'axios'

import { useEffect, useState } from 'react'

import styles from '../styles/modules/Home.module.css'

import Wrapper from '../layouts/Wrapper'

import Board from '../components/Board'
import Stats from '../components/Stats'
import Control from '../components/Control'

const Home = () => {

    const [mistakes, setMistakes] = useState(0)
    const [characters, setCharacters] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [time, setTime] = useState(0)
    const [templates, setTemplates] = useState([])
    const [accuracy, setAccuracy] = useState(100)
    const [isBlur, setIsBlur] = useState(false)
    const [isEnlarged, setIsEnlarged] = useState(false)

    useEffect(() => {
        axios.get('/api/texts').then(response => {
            setTemplates(response.data)
        })
    }, [])

    const handlers = [
        {
            value: 'Blur',
            state: isBlur,
            setState: setIsBlur
        },
        {
            value: 'Enlarged font',
            state: isEnlarged,
            setState: setIsEnlarged
        }
    ]

    return (
        <div>
            <Wrapper>
                <Control
                    handlers={handlers}
                />
                <Board
                    templates={templates}
                    isBlur={isBlur}
                    setIsBlur={setIsBlur}
                    isEnlarged={isEnlarged}
                    setIsEnlarged={setIsEnlarged}
                    accuracy={accuracy}
                    setAccuracy={setAccuracy}
                    time={time}
                    setTime={setTime}
                    speed={speed}
                    setSpeed={setSpeed}
                    characters={characters}
                    setCharacters={setCharacters}
                    mistakes={mistakes}
                    setMistakes={setMistakes}
                />
                <Stats
                    classes="main"
                    accuracy={accuracy}
                    mistakes={mistakes}
                    characters={characters}
                    speed={speed}
                    time={time}
                    setAccuracy={setAccuracy}
                />
            </Wrapper>
        </div>
    )

}

export default Home