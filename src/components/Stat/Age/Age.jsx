import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import Bar from '../Bar/Bar'

function Age(props) {
  //const [startDate, setStartDate] = useState(new Date());
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
          <Cell title="До 16" count={props.state.t16} img="/month.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
          <Cell title="16-22" count={props.state.f16t22} img="/Age.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css["bottom-title"]}>
          Статистика:
          <a>за месяц</a>
          <a>за год</a>
          <a>за все время</a>
        </div>
        <div className={css.graphic}>
          <Bar data={props.state.data} names={props.state.names}/>
        </div>
      </div>
    </div>
  );
}

export default Age;
