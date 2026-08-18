const increment = {
    type: "counter/increment",
    payload: 5,
}

const decrement = {
    type: "counter/decrement",
}

const reset = {
    type: "counter/reset",
}

export { increment, decrement, reset }
