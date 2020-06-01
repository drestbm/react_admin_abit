import React from 'react';
import css from './New.module.css';
import Frame from '../Frame/Frame';



function New() {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Создать тест</h1>
      </div>
      <div className={css.body}>
        <input className={`${css.name} ${css.input}`} placeholder="Название" type="text"></input>
        <div className={css.questions}>
          <Frame number="1"/>
          <Frame number="2"/>
          <Frame number="3"/>
          <Frame number="4"/>
          <Frame number="5"/>
          <Frame number="6"/>
          <Frame number="7"/>
          <Frame number="8"/>
          <Frame number="9"/>
        </div>
      </div>
      
    </div>
  );
}

export default New;
