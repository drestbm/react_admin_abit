import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import DatePicker from '../DatePicker/DatePicker';
import Bar from '../Graphics/Bar/Bar'

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
          <Cell title="Всего пользователей" count={props.age.total} img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="До 16" count={props.age.t16} img="/month.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
          <Cell title="16-22" count={props.age.f16t22} img="/Age.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css["bottom-title"]}>
          Статистика за определенный период
        </div>
        <div className={css.graphic}>
          <Bar data={props.age.data} names={props.age.names}/>
        </div>
        <div className={css.calendar}>
          <DatePicker/>
        </div>
      </div>
    </div>
  );
}

export default Age;
