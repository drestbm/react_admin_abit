import React from 'react';
import css from './New.module.css';


function New() {
  return (
    <div className={css.wrapper}>
      <input className={`${css.name} ${css.input}`} placeholder="Название" type="text"></input>
      <textarea className={`${css.news} ${css.input}`} placeholder="Текст новости"></textarea>
      <input className={`${css.datetime} ${css.input}`} placeholder="Дата и время отправки" type="text"></input>
      <button className={css.btn}>Опубликовать</button>
    </div>
  );
}

export default New;
