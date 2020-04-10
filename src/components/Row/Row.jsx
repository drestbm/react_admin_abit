import React from 'react';
import css from './Row.module.css';

function Row(props) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.name}>
        {props.name}
      </h1>
      <h1 className={css.create}>
        {props.date_create}
      </h1>
      <h1 className={css.publish}>
        {props.date_publish}
      </h1>
    </div>
  );
}

export default Row;
