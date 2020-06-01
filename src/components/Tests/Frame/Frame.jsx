import React from 'react';
import css from './Frame.module.css';


function Frame(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1> {props.number} </h1>
        <textarea className={`${css.question} ${css.input}`} placeholder="Вопрос"></textarea>
      </div>
        <input className={`${css.answer} ${css.input}`} placeholder="Ответ 1" type="text"></input>
        <input className={`${css.answer} ${css.input}`} placeholder="Ответ 2" type="text"></input>
        <input className={`${css.answer} ${css.input}`} placeholder="Ответ 3" type="text"></input>
      <div className={css.correct}>
        <h1> Правильный ответ: </h1>
        <div className={css["radio-group"]}>
          <input type="radio" id={`one${props.number}`} name={`s${props.number}`}/>
          <label for={`one${props.number}`}>1</label>
          
          <input type="radio" id={`two${props.number}`} name={`s${props.number}`}/>
          <label for={`two${props.number}`}>2</label>
          
          <input type="radio" id={`three${props.number}`} name={`s${props.number}`}/>
          <label for={`three${props.number}`}>3</label>
        </div>
        
      </div>
    </div>
  );
}

export default Frame;
