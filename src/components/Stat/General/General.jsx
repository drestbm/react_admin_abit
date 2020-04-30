import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import Line from '../Line/Line';
import DatePicker from '../DatePicker/DatePicker';
import {startActionCreater, endActionCreater} from '../../../store/actions/statActionCreater'

function General(props) {
  let start = React.createRef();
  let end = React.createRef();

  let changeStart = (() => {
    let action = startActionCreater(start.current.value)
    props.dispatch(action)
  })
  let changeEnd = (() => {
    let action = endActionCreater(end.current.value)
    props.dispatch(action)
  })
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Статистика</h1>
        <h2>по количеству пользователей</h2>
      </div>
      <div className={css["top-3"]}>
        <div className={css.cell}>
          <Cell title="Всего пользователей" count={props.state.total} img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="В среднем за месяц" count={props.state.month} img="/month.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
        <Cell title="В среднем за год" count={props.state.year} img="/year.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css["bottom-title"]}>
          Статистика за период:
        </div>
        <div className={css.calendar}>
          <input onChange={changeStart} ref={start} type="date"/>
          <input onChange={changeEnd} ref={end} type="date"/>
        </div>
        <div className={css.graphic}>
          <Line data={props.state.data}/>
        </div>
        
      </div>
    </div>
  );
}

export default General;
