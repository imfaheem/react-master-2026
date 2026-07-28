import { useFetch } from "../../../hooks/useFetch";
import { useToggle } from "../../../hooks/useToggle";

const Todos = ({ searchItem, filteredList }) => {
	const {data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
	const { isActive, toggle } = useToggle();
	
	const isActiveTodos = isActive ? 
		data.map((todos, index) => todos.completed === isActive && <p key={todos.id}>{index+1}. {todos.title}</p>) :
		data.map((todos, index) => <p key={todos.id}>{index+1}. {todos.title}</p>);
	
	return (
		<div>
			<h4>Todos</h4>
			<button onClick={toggle}>{isActive ? "All Todos" : "Show Completed"}</button>
            {loading && <p>Loading Todos...</p>}
            {error && <p>{error}</p>}
            {!data.length && !error ? (
                <p>No Todos available.</p>
            	) : (!loading && !error && 
						searchItem !== "" ? filteredList.map(list => (
							<p key={list.id}>{list.title}</p>
					)) : isActiveTodos
				)
            }
		</div>
	)
}

export default Todos;