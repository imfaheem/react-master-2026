import { useFetch } from "../../../hooks/useFetch";

const Users = ({ searchItem, filteredList }) => {
	const {data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <div>
            <h4>Users</h4>
            {loading && <p>Loading Users...</p>}
            {error && <p>{error}</p>}
            {!data.length && !error ? (
                <p>No users available.</p>
            ) : (!loading && !error && (
                    searchItem !== "" ? filteredList.map(list => (
                        <p key={list.id}>{list.name}</p>
                )) :
                data.map(users => (
                    <p key={users.id}>{users.name}</p>
                ))
            ))}
        </div>
    )
}

export default Users;