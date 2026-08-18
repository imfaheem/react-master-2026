const initialState = {
    count: 0,
}

export const counterReducter = (state = initialState, action) => {
    if(action.type === "counter/increment") {
        return {
            ...state,
            count: state.count + action.payload,
        }
    }

    if(action.type === "counter/decrement") {
        return {
            ...state,
            count: state.count - 1,
        }
    }

    if(action.type === "counter/reset") {
        return initialState
    }

    return state;
}
