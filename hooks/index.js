import { useState } from 'react'

export const useVisibility = length => {

    const initial = Array(length).fill(false)

    const [visibility, setVisibility] = useState(initial)

    const show = id => setVisibility(visibility.map((value, index) => index === id))
    const hide = () => setVisibility(initial)

    return { visibility, show, hide }

}
