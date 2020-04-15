//imports



//switch const
const NEW = 'NEW-TESTS';
const ACTION = 'ACTION-TESTS';
const ARCH = 'ARCH-TESTS';

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

