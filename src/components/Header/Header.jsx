import React from 'react';
import logo from '../../assets/logo-mobile.png';
import css from './Header.module.css';
import { NavLink, Redirect, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={css.nav}>
        <NavLink to="/stat" activeClassName={css.active}>
          <button className={css.item}>Статистика</button>
        </NavLink>
        <NavLink to="/news" activeClassName={css.active}>
          <button className={css.item}>Новости</button>
        </NavLink>
        <NavLink to="/tests" activeClassName={css.active}>
          <button className={css.item}>Тесты</button>
        </NavLink>
        <NavLink to="/settings" activeClassName={css.active}>
          <button className={css.item}>Настройки</button>
        </NavLink>
        <Switch> 
          <Redirect from='/stat' to='/stat/general'/>
          <Redirect from='/news' to='/news/add'/>
          <Redirect from='/tests' to='/tests/new'/>
          <Redirect from='/settings' to='/settings/new'/>
        </Switch>
      </div>
      <div className={css.exit}>
        <button className={css.item}>Выход</button>
      </div>
    </header>
  );
}

export default Header;
