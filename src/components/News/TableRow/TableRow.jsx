import React from 'react';
import css from './TableRow.module.css';

function Row(props) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.name}>
        {props.name}
      </h1>
      <h1 className={css.create}>
        {props.dateCreate}
      </h1>
      <h1 className={css.publish}>
        {props.datePublish}
      </h1>
      <img className={css.icon} src="/info.svg" alt="icon"/>
      <img className={css.icon} src="/pencil.svg" alt="icon"/>
      <img className={css.icon} src="/delete.svg" alt="icon"/>
    </div>
  );
}

export default Row;
