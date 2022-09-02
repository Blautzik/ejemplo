import React from 'react'
import styles from '../../styles/ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import { getJugadores,  getJugadoresByCategory , getJugadoresByTeam} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemListContainer = ({greeting}) => {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(false)
  const { teamId, categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if(!teamId && !categoryId ){
      getJugadores().then(jugadores => {
        setJugadores(jugadores)
        setLoading(false)
          })
    }
    else if(teamId){
      getJugadoresByTeam(teamId).then(jugadores => {
        setJugadores(jugadores)
        setLoading(false)
      })
    }
    
    else{
      getJugadoresByCategory(categoryId).then(jugadores => {
        setJugadores(jugadores)
        setLoading(false)
      })
    }

  }, [teamId, categoryId])
  
  return (
    <div className={styles.container}>
      {loading ? <Loader /> : <ItemList jugadores={jugadores}/> }
    </div>
  )
}

export default ItemListContainer