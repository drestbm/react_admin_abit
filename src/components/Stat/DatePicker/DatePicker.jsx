import React from 'react';
import Calendar from './Calendar';
import css from './DatePicker.module.css'

function DatePicker(props) {
    let date = {
        year: 2023,
        month: 0,
    }

    let visible = false

    let show = (() => {
        visible = !visible
    })

    return (
        <div className={css.wrapper}>
            <input type="text"/>
            <button onClick={show}> + </button>
            {visible ? <Calendar state={date}/>: null}
        </div>
    );
}

export default DatePicker;
