const ThemeReducer = (state={}, action) => {
    switch(action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            }
        case 'GET_THEME':
            return {
                ...state,
                action
            }
        default:
            return state
    }
}

export default ThemeReducer