import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import styles from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>Las Figu</div>
      <ul className="block flex justify-between w-8/12">
        <li>
          <Link to="/category/arquero" className={styles.links}>
            Arqueros
          </Link>
        </li>
        <li>
          <Link to="/category/delantero" className={styles.links}>
            Delanteros
          </Link>
        </li>
        <li>
          <Link to="/category/defensor" className={styles.links}>
            Defensores
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.links}>
            Todos
          </Link>
        </li>
      </ul>
      <div>
      <ul className="block flex justify-between w-8/12">
        <li>
          <Link to="team/argentina"> Argentina </Link>
        </li>
        <li>
          <Link to="team/brasil"> Brasil  </Link>
        </li>
        <li>
          <Link to="team/francia"> Francia </Link>
        </li>
      </ul>
      </div>
      <CartWidget totalQuantity={6} />
    </nav>
  );
};

export default NavBar;
