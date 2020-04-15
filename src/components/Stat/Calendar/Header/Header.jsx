import React from 'react';
import css from './Header.module.css';

function Header(props) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Выберите период
      </h1>
      <h1 className={css.previos}>
        &lsaquo;
      </h1>
      <h1 className={css.month}>
        Март 2020
      </h1>
      <h1 className={css.next}>
        &rsaquo;
      </h1>
    </div>
  );
}

export default Header;
