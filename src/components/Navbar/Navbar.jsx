import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const items = props.items;
  const list = items.map((item, index)=>
  <NavLink key={index} to={item.path} activeClassName={css.active}>
    <button  className={css.item}>{item.name}</button>
  </NavLink>
  );
  return (
    <nav className={css.wrapper}>
      {list}
    </nav>
  );
}

export default Navbar;
