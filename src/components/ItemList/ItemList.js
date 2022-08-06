import React from 'react'
import Item from '../Item/Item'
import styles from  '../../styles/ItemListContainer.module.css'

const ItemList = ({products}) => {
  return (
    <div className={styles.ItemList}>
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div> 
  )
}

export default ItemList