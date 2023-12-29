import logo from '../../assets/shuffle.svg'
import './style.css'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Shuffle" />
            <h1>
                Não sabe o que assistir?
            </h1>
        </header>
    )
}