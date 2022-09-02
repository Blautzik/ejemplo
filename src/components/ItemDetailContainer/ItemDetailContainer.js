import { useState, useEffect} from 'react'
import { getJugadorById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [jugador, setJugador] = useState()
    const [loading, setLoading] = useState(false)
    const {jugadorId} = useParams();

    useEffect(() => {
        setLoading(true)
        getJugadorById(jugadorId)
            .then(jugador => {
                setJugador(jugador)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [jugadorId])

    return (
        <div>
          {loading ? <Loader /> : <ItemDetail {...jugador}/> }
        </div>
    )
}

export default ItemDetailContainer