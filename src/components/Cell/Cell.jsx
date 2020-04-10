import React from 'react';
import css from './Cell.module.css';

function Cell(props) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        {props.title}
      </h1>
      <h1 className={css.count}>
        {props.count}
      </h1>
      <img className={css.icon} src={props.img} alt="icon"/>
    </div>
  );
}

export default Cell;
