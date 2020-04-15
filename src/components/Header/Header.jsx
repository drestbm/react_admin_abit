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
        <NavLink to="/stat/" activeClassName={css.active}>
          <button className={css.item}>Статистика</button>
        </NavLink>
        <NavLink to="/news/" activeClassName={css.active}>
          <button className={css.item}>Новости</button>
        </NavLink>
        <NavLink to="/tests/" activeClassName={css.active}>
          <button className={css.item}>Тесты</button>
        </NavLink>
        <NavLink to="/settings/" activeClassName={css.active}>
          <button className={css.item}>Настройки</button>
        </NavLink>
        {/* Сделать компоненты навлинков */}
      </div>
      <div className={css.exit}>
        <button className={css.item}>Выход</button>
      </div>
    </header>
  );
}

export default Header;
