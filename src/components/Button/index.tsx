import axios from 'axios';
import { api } from '../../library/api'

import shuffleSvg from '../../assets/shuffle.svg'
import './style.css'

type Movie = {
    title: string,
}

type ButtonProps = {
    renderNewMovie: (newMovie: Movie) => void,
}

export default function Button({ renderNewMovie }: ButtonProps) {

    async function getMovie() {
        try {
            const response = await api.get('/latest')
            const movieID = response.data.id;

            async function getWorkingMovie() {
                try {
                    const randomIndex = Math.floor(Math.random() * movieID)
                    const { data } = await api.get(`/${randomIndex}`)

                    renderNewMovie(data)
                    

                } catch (err) {
                    if (axios.isAxiosError(err)) {
                        if (err.response?.status.toString()[0] !== "2") {                            
                            getWorkingMovie()
                            return
                        }

                        console.error(err);
                    } else {
                        console.error(err);
                    }
                }
            }

            getWorkingMovie()

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <button onClick={getMovie}>
            <img src={shuffleSvg} alt="Shuffle" />
            Encontrar filme
        </button>
    )
}