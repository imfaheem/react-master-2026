const initialState = {
    todoss: []
};

export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "todos/add":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload?.id ?? Date.now(),
                        title: action.payload?.title ?? "Learn Redux",
                        completed: false
                    }
                ]
            };

        case "todos/toggle":
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                )
            };

        case "todos/deleted":
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            };

        case "todos/clearCompleted":
            return {
                ...state,
                todos: state.todos.filter((item) => !item.completed)
            };

        case "todos/clearAll":
            return {
                ...state,
                todos: []
            };

        default:
            return state;
    }
};
