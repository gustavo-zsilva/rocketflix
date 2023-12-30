import { useContext } from 'react'
import { MovieContext } from './contexts/MovieContext'

import Header from './components/Header'
import Button from './components/Button'
import Movie from './components/Movie'

import './styles/App.css'

function App() {
  const { movie } = useContext(MovieContext)
  
  return (
    <div className="container">
      <Header />
      {movie && <Movie />}
      <Button />
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
    </div>
  )
}

export default App
