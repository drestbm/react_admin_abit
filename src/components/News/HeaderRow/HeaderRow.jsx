import React from 'react';
import css from './HeaderRow.module.css';

function HeaderRow(props) {
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
    </div>
  );
}

export default HeaderRow;
