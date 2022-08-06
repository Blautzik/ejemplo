import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from '../../styles/NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>Supershop</div>
      <ul className={styles.list}>   
        <li>
          <Link to='/category/laptop' className={styles.links}>laptop</Link>
        </li>
        <li>
          <Link to='/category/celular' className={styles.links}>celular</Link>
        </li>
        <li>
          <Link to='/category/tablet' className={styles.links}>tablet</Link>
        </li>
      </ul>
      <CartWidget totalQuantity={6}/>
    </nav>
    
  )
}

export default NavBar