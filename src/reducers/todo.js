const counter = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUBSTRACT':
            return state - 1
        default:
            return state;
    }
}

export default counter;

//berfungsi mengelola logika yang akan diberikan pada state