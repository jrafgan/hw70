const initialState = {
    memory: 0,
    printedOperations: '',
};

const reducer = ( state = initialState, action)=>{

    switch(action.type) {
        case 'CALCULATE':
            return {
                ...state,
                calculator: state.calculator === 0 ? (state.calculator + parseInt(action.value)) : state.calculator + action.value
            };
        case :
            return {
                ...state,
                calculator: eval(state.calculator),
            };
        case 'DELETE_LAST_ONE':

            return {
                ...state,
                calculator: String(state.calculator).slice(0, -1),
            };
        default: break;
    }
    return state;
};

export default reducer;
