import { decrement, increment, reset } from "../redux/actions/counterActions"
import { counterReducter } from "../redux/reducers/counterReducter"

import Container from "../components/Container"
import HeadingTitle from "../components/HeadingTitle"
import { Counter } from "../components/Counter"
import { TodoList } from "../components/TodoList"

export const TraditionalRedux = () => {
    const currentState = {
        count: 0,
    }

    const incrementState = counterReducter(currentState, increment);
    const decrementState = counterReducter(currentState, decrement);
    const resetState = counterReducter(currentState, reset);

    return (
        <Container>
            <HeadingTitle>Traditional Redux</HeadingTitle>
            <p>Initial State: {currentState.count}</p>
            <p>Increment State: {incrementState.count}</p>
            <p>Decrement State: {decrementState.count}</p>
            <p>Reset State: {resetState.count}</p>

            <div className="flex gap-4">
                <Counter />
                <TodoList />
            </div>
        </Container>
    )
}
