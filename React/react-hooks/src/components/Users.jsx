import { useState, useEffect } from "react";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async ()=> {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) {
                    throw new Error("Failed to fetch users.");
                }
                const data = await response.json();
                setUsers(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading) {
        return <h3>Loading users...</h3>
    }

    if(error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="m-20">
            <h2>Users</h2>
            {users.length === 0 ?
                <h3>No users available...</h3> :
                users.map(user => (
                <p key={user.id}>{user.name} - {user.email}</p>
            ))}
        </div>
    )
}
