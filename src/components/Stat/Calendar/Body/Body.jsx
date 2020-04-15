import React from 'react';
import css from './Body.module.css';
import Cell from '../Cell/Cell';

function Body(props) {
  let cells = [];
  for (let i = 28; i < 31; i++) {
    cells.push(
      <Cell className={css.unactive} day={i}/>
    )
  }
  for (let i = 1; i < 31; i++) {
    cells.push(
      <Cell className={css.active} day={i}/>
    )
  }
  
  return (
    <div className={css.wrapper}>
        {cells}
    </div>
  );
}

export default Body;
