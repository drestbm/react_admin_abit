import React from 'react';
import css from '../Stat.module.css';
import Cell from '../Cell/Cell'
import Calendar from '../Calendar/Calendar';
import Graphic from '../Graphic/Graphic';


function Sex() {
  //const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Статистика</h1>
        <h2>по полу пользователей</h2>
      </div>
      <div className={css["top-3"]}>
        <div className={css.cell}>
          <Cell title="Всего пользователей" count="2345" img="/total.svg"/>
        </div>
        <div className={css.cell}>
          <Cell title="Мужчин" count="2345" img="/man.svg"/>
        </div>
        <div className={`${css.cell} ${css["cell-last"]}` }>
        <Cell title="Женщин" count="2345" img="/woman.svg"/>
        </div>
      </div>
      <div className={css.bottom}>
        <div className={css.graphic}>
          <Graphic/>
        </div>
        <div className={css.calendar}>
          <Calendar/>
        </div>
      </div>
    </div>
  );
}

export default Sex;
