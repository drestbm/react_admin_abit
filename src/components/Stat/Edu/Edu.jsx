import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'

function Edu(props) {
  //const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Статистика</h1>
        <h2>по учебным заведениям</h2>
      </div>
      <div className={css["top-3"]}>
        <div className={css.cell}>
          <Cell title="Всего пользователей" count={props.state.total} img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="В среднем из одного заведения" count={props.state.avg} img="/month.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
        <Cell title="Количество заведений" count={props.state.count} img="/year.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css["bottom-title"]}>
          
        </div>
        <div className={css.graphic}>

        </div>
        <div className={css.calendar}>

        </div>
      </div>
    </div>
  );
}

export default Edu;
