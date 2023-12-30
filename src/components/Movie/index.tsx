import { useContext, useState, useEffect } from 'react'
import { MovieContext } from '../../contexts/MovieContext'

import { TbError404 } from 'react-icons/tb'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import './style.css'

export default function Movie() {
    const { movie } = useContext(MovieContext)
    const [isAdultContentVisible, setIsAdultContentVisible] = useState(false)
    const formattedReleaseDate = movie?.release_date.slice(0, 4)

    function toggleAdultContentVisibility() {
        setIsAdultContentVisible(!isAdultContentVisible)
    }

    useEffect(() => {
        if (movie?.adult) {
            setIsAdultContentVisible(false)
        }
    }, [movie])

    return (
        <div className="movie">
            {movie?.poster_url ? (
                <img
                    src={movie?.poster_url}
                    alt="Movie poster"
                    style={{ filter: movie.adult && !isAdultContentVisible ? "blur(10px)" : "initial" }}
                />
            ) : (
                <div className="not-found">
                    <TbError404 size={45} title="404" />
                    <h3>Uh Oh!</h3>
                    <p>Parece que não encontramos o poster deste filme.</p>
                </div>
            )}
            <div className="content">
                <header>
                    <div>
                        <h3>{movie?.title}</h3>
                        <span className="release-date">{formattedReleaseDate}</span>
                    </div>
                    {movie?.adult && (
                        <button title="Adult Content" onClick={toggleAdultContentVisibility}>
                            {
                                isAdultContentVisible ?
                                <FaRegEye size={22} /> :
                                <FaRegEyeSlash size={22} />
                            }
                        </button>
                    )}
                </header>
                <p>{movie?.overview}</p>
            </div>
        </div>
    )
}