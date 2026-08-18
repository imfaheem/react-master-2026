import { counterReducter } from "./reducers/counterReducter"

let state = undefined;

const listeners = [];

export const store = {
    getState() {
        return state
    },

    dispatch(action) {
        state = counterReducter(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    },

    subscribe(listener) {
        listeners.push(listener);
    }
}
