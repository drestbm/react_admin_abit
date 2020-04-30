export const startActionCreater = ((date) => {
    return {
        type: 'CHANGE_START_DATE',
        start: date
    }
})

export const endActionCreater = ((date) => {
    return {
        type: 'CHANGE_END_DATE',
        start: date
    }
})