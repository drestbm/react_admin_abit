import React from 'react';
import css from './Login.module.css';
import logo from '../../assets/logo-mobile.png';

function Header() {
  return (
    <div className={css.wrapper}>
      <div className={css.login}>
        <img src={logo} alt="logo"/>
        {/* <h1>
          Авторизация
        </h1> */}
        <input type="text" placeholder="Логин"/>
        <input type="password" placeholder="Пароль"/>
        <button> Вход </button>
      </div>
    </div>
  );
}

export default Header;
