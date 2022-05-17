const staffReducer = (state = null, action) => {
    switch (action.type) {
        case 'Omar':
            return console.log('this is', state, 'Omar');
        case 'Iza':
            return console.log('this is', state, 'Iza')
    }
}

export default staffReducer;