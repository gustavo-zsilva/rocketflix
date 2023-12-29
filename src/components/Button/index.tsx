import shuffleSvg from '../../../public/assets/shuffle.svg'
import './style.css'

export default function Button() {
    return (
        <button>
            <img src={shuffleSvg} alt="Shuffle" />
            Encontrar filme
        </button>
    )
}