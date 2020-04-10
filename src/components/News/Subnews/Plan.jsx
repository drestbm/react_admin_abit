import React from 'react';
import css from './Plan.module.css';
import Row from '../../Row/Row'


function Plan() {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.name}>
          <h1>Название</h1>
        </div>
        <div className={css.create}>
          <h1>Дата создания</h1>
        </div>
        <div className={css.publish}>
          <h1>Дата публикации</h1>
        </div>
      </div>
      <div className={css.list}>
        <Row />
      </div>
    </div>
  );
}

export default Plan;
