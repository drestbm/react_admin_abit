//imports



//switch const
const NEW = 'NEW-NEWS';
const PLAN = 'PLAN-LIST-NEWS';
const HISTORY = 'HISTORY-LIST-NEWS'

const initialState = {
    new: {
        name: '',
        text: '',
        date: new Date()
    },
    plan: {
        name: '',
        text: '',
        dateCreate: new Date(),
        datePublish: new Date(),
        list: [
            {name: "Новость 1", dateCreate: "01.04.2020", datePublish: "02.04.2020"},
            {name: "Новость 2", dateCreate: "02.04.2020", datePublish: "03.04.2020"},
            {name: "Новость 3", dateCreate: "03.04.2020", datePublish: "04.04.2020"},
            {name: "Новость 4", dateCreate: "04.04.2020", datePublish: "05.04.2020"},
            {name: "Новость 5", dateCreate: "05.04.2020", datePublish: "06.04.2020"},
            {name: "Новость 6", dateCreate: "06.04.2020", datePublish: "07.04.2020"},
            {name: "Новость 7", dateCreate: "07.04.2020", datePublish: "08.04.2020"},
            {name: "Новость 8", dateCreate: "08.04.2020", datePublish: "09.04.2020"},
            {name: "Новость 9", dateCreate: "09.04.2020", datePublish: "10.04.2020"},
            {name: "Новость 10", dateCreate: "10.04.2020", datePublish: "11.04.2020"},
            {name: "Новость 11", dateCreate: "11.04.2020", datePublish: "12.04.2020"},
            {name: "Новость 12", dateCreate: "12.04.2020", datePublish: "13.04.2020"},
            {name: "Новость 13", dateCreate: "13.04.2020", datePublish: "14.04.2020"},
            {name: "Новость 14", dateCreate: "14.04.2020", datePublish: "15.04.2020"}
        ]
    },
    history: {
        name: '',
        text: '',
        dateCreate: new Date(),
        datePublish: new Date(),
        list: [
            {name: "Новость 1", dateCreate: "01.04.2020", datePublish: "02.04.2020"},
            {name: "Новость 2", dateCreate: "02.04.2020", datePublish: "03.04.2020"},
            {name: "Новость 3", dateCreate: "03.04.2020", datePublish: "04.04.2020"},
            {name: "Новость 4", dateCreate: "04.04.2020", datePublish: "05.04.2020"},
            {name: "Новость 5", dateCreate: "05.04.2020", datePublish: "06.04.2020"},
            {name: "Новость 6", dateCreate: "06.04.2020", datePublish: "07.04.2020"},
            {name: "Новость 7", dateCreate: "07.04.2020", datePublish: "08.04.2020"},
            {name: "Новость 8", dateCreate: "08.04.2020", datePublish: "09.04.2020"},
            {name: "Новость 9", dateCreate: "09.04.2020", datePublish: "10.04.2020"},
            {name: "Новость 10", dateCreate: "10.04.2020", datePublish: "11.04.2020"},
            {name: "Новость 11", dateCreate: "11.04.2020", datePublish: "12.04.2020"},
            {name: "Новость 12", dateCreate: "12.04.2020", datePublish: "13.04.2020"},
            {name: "Новость 13", dateCreate: "13.04.2020", datePublish: "14.04.2020"},
            {name: "Новость 14", dateCreate: "14.04.2020", datePublish: "15.04.2020"}
        ]
    },
}

function newsReduser(state = initialState, action) {
    switch(action.type){
        case NEW:
            return state;
        case PLAN:
            return state;
        case HISTORY:
            return state;
        default:
            return state;
    }
}

export default newsReduser;

