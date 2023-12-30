import { useState, useEffect } from 'react'

import Header from './components/Header'
import Button from './components/Button'

import './styles/App.css'

interface Movie {
  title: string,
}

function App() {

  const [movie, setMovie] = useState<Movie | null>(null)

  function renderNewMovie(newMovie: Movie) {
    setMovie(newMovie)
  }

  useEffect(() => {
    console.log(movie)
  }, [movie])

  return (
    <div className="container">
      <Header />
      <Button renderNewMovie={renderNewMovie} />
      <p>{movie?.title}</p>
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
    </div>
  )
}

export default App
