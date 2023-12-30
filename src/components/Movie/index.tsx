import { useContext } from 'react'
import { MovieContext } from '../../contexts/MovieContext'

import './style.css'

export default function Movie() {
    const { movie } = useContext(MovieContext)

    console.log(movie)

    return (
        <div className="movie">
            {movie?.poster_url ? (
                <img src={movie?.poster_url} alt="Movie poster" />
            ) : (
                <div className="not-found" />
            )}
            <div className="content">
                <h3>{movie?.title}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, accusamus natus! Tempora, ullam! Optio accusamus expedita delectus dolor libero, sit quod sint velit nostrum, incidunt necessitatibus sed dolorum iure reprehenderit.</p>
            </div>
        </div>
    )
}