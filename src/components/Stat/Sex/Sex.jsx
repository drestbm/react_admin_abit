import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import Bar from '../Bar/Bar'


function Sex(props) {
  debugger
  //const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Статистика</h1>
        <h2>по полу пользователей</h2>
      </div>
      <div className={css["top-3"]}>
        <div className={css.cell}>
          <Cell title="Всего пользователей" count={props.state.total} img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="Мужчин" count={props.state.man} img="/man.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
        <Cell title="Женщин" count={props.state.woman} img="/woman.svg"/>
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

export default Sex;
