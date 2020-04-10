import React from 'react';
import css from '../Stat.module.css';
import Cell from '../../Cell/Cell'


function Total() {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.title}>
          <h1>Статистика</h1>
        </div>
        <div className={css.general}>
          <Cell title="Всего" count="2345" img="/total.svg"/>
        </div>
        <div className={css.substat}>
          <div className={css.cell1}>
            <Cell  title="За последний месяц" count="2345" img="/month.svg"/>
          </div>
          <div className={css.cell2}>
            <Cell  title="За последний год" count="2345" img="/year.svg"/>
          </div>
          <div className={css.cell3}>
          <Cell  title="В среднем за месяц" count="2345" img="/month.svg"/>
          </div>
          <div className={css.cell4} >
          <Cell title="В среднем за год" count="2345" img="/year.svg"/>
          </div>
        </div>
      </div>
      <div className={css.body}>
        
      </div>
    </div>
  );
}

export default Total;
