//imports



//switch const
const TOTAL = 'TOTAL-STAT';
const SEX = 'SEX-STAT';
const AGE = 'AGE-STAT';
const EDU = 'EDU-STAT';

const initialState = {

}

function statReduser(state = initialState, action) {
    switch(action.type){
        case TOTAL:
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

