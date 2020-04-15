import React from 'react';
import css from './Calendar.module.css';
import Header from './Header/Header'
import Body from './Body/Body'

function Calendar(props) {
  return (
    <div className={css.wrapper}>
      <Header/>
      <Body/>
    </div>
  );
}

export default Calendar;
