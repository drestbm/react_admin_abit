//imports



//switch const
const ADD = 'ADD-NEW-NEWS';
const PLAN = 'PLAN-LIST-NEWS';
const HISTORY = 'HISTORY-LIST-NEWS'

const initialState = {
    new: {
        name: '',
        texe: '',
        date: new Date()
    },
    sheduled: [
        {
            name: '',
            texe: '',
            dateCreate: new Date(),
            datePublish: new Date()
        },
    ],
    history: [
        {
            name: '',
            texe: '',
            dateCreate: new Date(),
            datePublish: new Date()
        },
    ]
}

function newsReduser(state = initialState, action) {
    switch(action.type){
        case ADD:
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

