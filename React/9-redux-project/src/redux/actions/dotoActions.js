const add = (id, title) => ({
    type: "todos/add",
    payload: {
        id,
        title,
    },
});

const toggle = (id) => ({
    type: "todos/toggle",
    payload: id,
});

const deleted = (id) => ({
    type: "todos/deleted",
    payload: id,
});

const clearCompleted = () => ({
    type: "todos/clearCompleted",
});

const clearAll = () => ({
    type: "todos/clearAll",
});

export { add, toggle, deleted, clearCompleted, clearAll };
