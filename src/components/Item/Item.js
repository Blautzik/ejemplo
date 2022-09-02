import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, team}) => {
  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                {team}
            </p>
        </section>           
        <footer className='ItemFooter'>
          <Link to={`/detail/${id}`}>
            <button>ver detalles</button>
          </Link>
        </footer>
    </article>
    )
}

export default Item