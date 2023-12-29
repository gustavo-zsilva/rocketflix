import Header from './components/Header'
import Button from './components/Button'

import './styles/App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Button />
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
    </div>
  )
}

export default App
