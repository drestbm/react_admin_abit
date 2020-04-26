import React, {useState} from 'react';
import './DatePicker.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import {ru} from 'date-fns/esm/locale'


function DatePicker1(props) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    registerLocale('ru', ru)
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
            {/* <DatePicker
                dateFormat="dd.MM.yyyy"
                locale="ru"
                calendarClassName="cal"
                selectsStart
                minDate={new Date(2018,0,1)}
                maxDate={new Date()}
                selected={startDate}
                onChange={date => setStartDate(date)}
                placeholderText="от"
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                dateFormat="dd.MM.yyyy"
                locale="ru"
                calendarClassName="cal"
                selectsEnd
                minDate={new Date(2018,0,1)}
                maxDate={new Date()}
                selected={endDate}
                onChange={date => setEndDate(date)}
                placeholderText="до"
                startDate={startDate}
                endDate={endDate}
            /> */}
        </div>
    );
}

export default DatePicker1;
