import { useFetch } from "../hooks/useFetch";

export const FetchUsers = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) {
        return <p>Loading users...</p>
    }

    if(error) {
        return <p>Error! During fetching users.</p>
    }

    return (
        <div>
            <h4>Fetch Users</h4>
            {data.map((user, index) => (
                <p key={user.id}>{index + 1}. {user.name}</p>
            ))}
        </div>
    )
}
