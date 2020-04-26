import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import Line from '../Graphics/Line/Line';
import DatePicker from '../DatePicker/DatePicker';

function General(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Статистика</h1>
        <h2>по количеству пользователей</h2>
      </div>
      <div className={css["top-3"]}>
        <div className={css.cell}>
          <Cell title="Всего пользователей" count={props.general.total} img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="В среднем за месяц" count={props.general.month} img="/month.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
        <Cell title="В среднем за год" count={props.general.year} img="/year.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css["bottom-title"]}>
          Статистика за период:
        </div>
        <div className={css.calendar}>
          <DatePicker/>
        </div>
        <div className={css.graphic}>
          <Line data={props.general.data}/>
        </div>
        
      </div>
    </div>
  );
}

export default General;
