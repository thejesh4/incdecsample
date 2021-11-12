const reducer = (initailState = {
    count: 0
}, action) => {
    switch(action.type) {
        case "inc":
            initailState = {
                count: initailState.count + 1
            }
            break;
        case "dec":
            initailState = {
                count: initailState.count - 1
            }
            break;
        default:
            break;
    }
    return initailState;
}

export default reducer;
