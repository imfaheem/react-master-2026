import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { UserSearch } from "./UserSearch";
import { UsersContext } from "./../context/UsersContext";

export const Users = () => {

    const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=> {
        const controller = new AbortController();

        const fetchUsers = async ()=> {
            try {
                const response = await fetch(
                    "https://dummyjson.com/users", 
                    {
                        signal: controller.signal
                    }
                );
                if(!response.ok) {
                    throw new Error("Failed to fetch users.");
                }
                const data = await response.json();
                setUsers(data.users);
            } catch(err) {
                if(err.name !== "AbortError") {
                    console.error(err);
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();

        return ()=> {
            controller.abort();
        }
    }, []);

	if(loading) {
		return <h3>Loading users data...</h3>
	}
	
	if(error) {
		return <h3>{error}</h3>
	}

    const handleSearchInput = (e)=> {
        setSearchTerm(e.target.value);
    }

    return (
        <UsersContext.Provider value={{users, searchTerm}}>
            <div className="m-10 flex">
                <UserCard />
                <UserSearch handleSearchInput={handleSearchInput} />
            </div>
        </UsersContext.Provider>
    )
}
