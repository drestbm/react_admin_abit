import React from 'react';
import css from './Calendar.module.css';
import Cell from './Cell'

function Calendar(props) {
    let cells = [];

    let start = new Date(props.state.year, props.state.month, 1);
    let end = new Date(props.state.year, props.state.month, 0);
    
    if (start.getDay() !== 1) {
        if (start.getDay() === 0) 
            start.setDate(start.getDate() - 6)
        else 
            start.setDate(start.getDate() - start.getDay() + 1)

        for (let i = start.getDate(); i <= end.getDate(); i++) {
            cells.push(
                <Cell newClassName={css.inactive} day={i}/>
            )
        }
    }
    
    start.setFullYear(props.state.year, props.state.month, 1);
    end.setFullYear(props.state.year, props.state.month+1, 0);

    for (let i = start.getDate(); i <= end.getDate(); i++) {
        cells.push(
            <Cell newClassName={css.active} day={i}/>
        )
    }

    start.setFullYear(props.state.year, props.state.month+1, 1);
    if (end.getDay() !== 0) {
        end.setFullYear(props.state.year, props.state.month+1, 7-end.getDay())

        for (let i = 1; i <= end.getDate(); i++) {
            cells.push(
                <Cell newClassName={css.inactive} day={i}/>
            )
        }
    }

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <div className={css.year}>
                    <button onClick="prevYear"> ( </button>
                    <h1>{props.state.year}</h1>
                    <button> ) </button>
                </div>
                <div className={css.month}>
                    <button> ( </button>
                    <h1>Январь</h1>
                    <button> ) </button>
                </div>
            </div>
            <div className={css.weekday}>
                <h1>ПН</h1>
                <h1>ВТ</h1>
                <h1>СР</h1>
                <h1>ЧТ</h1>
                <h1>ПТ</h1>
                <h1>СБ</h1>
                <h1>ВС</h1>
            </div>
            <div className={css.body}>
                {cells}
            </div>
        </div>
    );
}

export default Calendar;
