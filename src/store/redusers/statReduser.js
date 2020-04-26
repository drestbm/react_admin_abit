//imports



//switch const
const GENERAL = 'GENERAL-STAT';
const SEX = 'SEX-STAT';
const AGE = 'AGE-STAT';
const EDU = 'EDU-STAT';

const initialState = {
    general: {
        total: 0,
        month: 1,
        year: 2,
        from: new Date(2018,0,1),
        to: new Date(),
        data: [
            { x: "январь", y: 0 },
            { x: "февраль", y: 2 },
            { x: "март", y: 1 },
            { x: "апрель", y: 4 },
            { x: "май", y: 3 },
            { x: "июнь", y: 5 }
        ]
    }, 
    sex: {
        total: 0,
        man: 1,
        woman: 2,
        from: new Date(2018,0,1),
        to: new Date(),
        names: [
            "Мужчины",
            "Женщины",
            "Неизвестно"
        ],
        data: [
            [
                { x: "янв.", y: 3 }, 
                { x: "фев.", y: 4 }, 
                { x: "мар.", y: 9 },
                { x: "апр.", y: 3 }, 
                { x: "май", y: 4 }, 
                { x: "июн.", y: 9 },
                { x: "июл.", y: 3 }, 
                { x: "авг.", y: 4 }, 
                { x: "сен.", y: 9 },
                { x: "окт.", y: 3 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 9 },
            ],
            [
                { x: "янв.", y: 2 }, 
                { x: "фев.", y: 3 }, 
                { x: "мар.", y: 10 },
                { x: "апр.", y: 4 }, 
                { x: "май", y: 7 }, 
                { x: "июн.", y: 6 },
                { x: "июл.", y: 6 }, 
                { x: "авг.", y: 5 }, 
                { x: "сен.", y: 6 },
                { x: "окт.", y: 7 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 8 },
            ],
            [
                { x: "янв.", y: 4 }, 
                { x: "фев.", y: 6 }, 
                { x: "мар.", y: 5 },
                { x: "апр.", y: 7 }, 
                { x: "май", y: 3 }, 
                { x: "июн.", y: 5 },
                { x: "июл.", y: 3 }, 
                { x: "авг.", y: 7 }, 
                { x: "сен.", y: 4 },
                { x: "окт.", y: 5 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 9 },
            ]
        ]
    },
    age: {
        total: 0,
        t16: 1,
        f16t22: 2,
        f22: 3,
        from: new Date(2018,0,1),
        to: new Date(),
        names: [
            "от 16",
            "16-22",
            "Неизвестно"
        ],
        data: [
            [
                { x: "янв.", y: 3 }, 
                { x: "фев.", y: 4 }, 
                { x: "мар.", y: 9 },
                { x: "апр.", y: 3 }, 
                { x: "май", y: 4 }, 
                { x: "июн.", y: 9 },
                { x: "июл.", y: 3 }, 
                { x: "авг.", y: 4 }, 
                { x: "сен.", y: 9 },
                { x: "окт.", y: 3 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 9 },
            ],
            [
                { x: "янв.", y: 2 }, 
                { x: "фев.", y: 3 }, 
                { x: "мар.", y: 10 },
                { x: "апр.", y: 4 }, 
                { x: "май", y: 7 }, 
                { x: "июн.", y: 6 },
                { x: "июл.", y: 6 }, 
                { x: "авг.", y: 5 }, 
                { x: "сен.", y: 6 },
                { x: "окт.", y: 7 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 8 },
            ],
            [
                { x: "янв.", y: 4 }, 
                { x: "фев.", y: 6 }, 
                { x: "мар.", y: 5 },
                { x: "апр.", y: 7 }, 
                { x: "май", y: 3 }, 
                { x: "июн.", y: 5 },
                { x: "июл.", y: 3 }, 
                { x: "авг.", y: 7 }, 
                { x: "сен.", y: 4 },
                { x: "окт.", y: 5 }, 
                { x: "ноя.", y: 4 }, 
                { x: "дек.", y: 9 },
            ]
        ]
    },
    edu: {
        total: 0,
        avg: 1,
        count: 2,
        from: new Date(2018,0,1),
        to: new Date(),
        data: {}
    }
}

function statReduser(state = initialState, action) {
    switch(action.type){
        case GENERAL:
            return state;
        case SEX:
            return state;
        case AGE:
            return state;
        case EDU:
            return state;
        default:
            return state;
    }
}

export default statReduser;

