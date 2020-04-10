import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={css.wrapper}>
      <div className={css.logo}>
        <img src="logo-mobile.png" alt="logo"/>
      </div>
      <div className={css.nav}>
        <NavLink to="/stat/total/" activeClassName={css.active}>
          <button className={css.item}>Статистика</button>
        </NavLink>
        <NavLink to="/news/add" activeClassName={css.active}>
          <button className={css.item}>Новости</button>
        </NavLink>
        <NavLink to="/tests/new" activeClassName={css.active}>
          <button className={css.item}>Тесты</button>
        </NavLink>
        <NavLink to="/settings/new" activeClassName={css.active}>
          <button className={css.item}>Настройки</button>
        </NavLink>
      </div>
      <div className={css.exit}>
        <button className={css.item}>Выход</button>
      </div>
    </header>
  );
}

export default Header;
