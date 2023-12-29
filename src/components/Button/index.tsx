import { api } from '../../library/api'

import shuffleSvg from '../../assets/shuffle.svg'
import './style.css'

export default function Button() {

    async function getMovie() {
        try {
            const response = await api.get('/11')
            console.log(response.data);
            
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