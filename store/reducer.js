const initialState = {
    memory: 0,
    printedOperations: '',
};

const reducer = (state = initialState, action) => {

    try {
        switch (action.type) {

            case 'INSERT_VALUE':
                return {
                    ...state,
                    printedOperations: state.printedOperations + action.value,
                };

            case '=':
                return {
                    ...state,
                    printedOperations: eval(state.printedOperations),
                };

            case 'CE':
                return {
                    ...state,
                    printedOperations: '',
                };

            case 'M+':
                console.log('M+');
                    return {
                        ...state,
                        printedOperations: parseInt(state.memory) + parseInt(state.printedOperations),
                    };

            case 'M-':
                return {
                    ...state,
                    printedOperations: parseInt(state.memory) - parseInt(state.printedOperations),
                };

            case '%':
                return {
                    ...state,
                    printedOperations: eval(state.printedOperations) / 100,
                };

            case '<':
                return {
                    ...state,
                    printedOperations: String(state.printedOperations).slice(0, -1),
                };

            case 'MS':
                return {
                    ...state,
                    memory: state.printedOperations,
                };

            case 'MC':
                return {
                    ...state,
                    memory: 0,
                };

            default:
                break;
        }
        return state;
    } catch (e) {
        console.log('Error')
    }
};

export default reducer;
