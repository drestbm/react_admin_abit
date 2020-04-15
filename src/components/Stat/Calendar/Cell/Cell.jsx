import React from 'react';
import css from './Cell.module.css';

function Cell(props) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.day}>
        {props.day}
      </h1>
    </div>
  );
}

export default Cell;
