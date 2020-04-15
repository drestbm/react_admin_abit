//imports



//switch const
const NEW = 'NEW-USER-SETTINGS';
const LIST = 'USER-LIST-SETTINGS';

const initialState = {
    
}

function newsReduser(state = initialState, action) {
    switch(action.type){
        case NEW:
            return state;
        case LIST:
            return state;
        default:
            return state;
    }
}

export default newsReduser;

