import React from 'react'
import Item from '../Item/Item'
import styles from  '../../styles/ItemListContainer.module.css'

const ItemList = ({jugadores}) => {
  return (
    <div className={styles.ItemList}>
      {jugadores.map(jugador => <Item key={jugador.id} {...jugador}/>)}
    </div> 
  )
}

export default ItemList