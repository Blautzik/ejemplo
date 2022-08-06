import React from 'react'
import styles from '../../styles/ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {

    if(!categoryId){
      getProducts().then(products => {
        setProducts(products)
          })
    }
    else{
      getProductsByCategory(categoryId).then(products => {
        setProducts(products)
      })
    }
      
  }, [categoryId])
  

  return (
    <div className={styles.container}>
      <h1>{greeting}</h1>
      <ItemList products={products}/>

    </div>
  )
}

export default ItemListContainer