import { ReactNode, createContext, useState } from "react";

import axios from "axios";
import { api } from "../library/api";

export const MovieContext = createContext({} as MovieContextProps)

type MovieContextProps = {
    movie: MovieProps | null,
    getMovie: () => void,
}

type MovieProps = {
    title: string,
    overview: string,
    poster_url: string,
    adult: boolean,
    release_date: string,
}

type MovieProviderProps = {
    children: ReactNode,
}

export function MovieProvider({ children }: MovieProviderProps) {
    const [movie, setMovie] = useState<MovieProps | null>(null)

    async function getMovie() {
        
        // Fix this with spread operator
        const movieReset: MovieProps | null = {
            adult: false,
            overview: "",
            poster_url: "",
            release_date: "",
            title: "",
        }

        setMovie(movieReset)

        try {
            const response = await api.get('/latest')
            const movieID = response.data.id;

            async function getWorkingMovie() {
                try {
                    const randomIndex = Math.floor(Math.random() * movieID)
                    const { data } = await api.get(`/${randomIndex}`)

                    const newMovie = {
                        ...data,
                        poster_url: data.poster_path ? `https://image.tmdb.org/t/p/w500${data?.poster_path}` : null,
                    }

                    setMovie(newMovie)

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
        <MovieContext.Provider
            value={{
                movie,
                getMovie,
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}