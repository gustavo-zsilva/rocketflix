import { useContext } from 'react'
import { MovieContext } from '../../contexts/MovieContext'

import shuffleSvg from '../../assets/shuffle.svg'
import './style.css'

export default function Button() {

    const { getMovie } = useContext(MovieContext)

    return (
        <button className="get-movie-btn" onClick={getMovie}>
            <img src={shuffleSvg} alt="Shuffle" />
            Encontrar filme
        </button>
    )
}