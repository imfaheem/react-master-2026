import { useCallback, useEffect, useState } from "react";
import { UserActions } from "./UserActions";
import { UserProfile } from "./UserProfile";

export const UserDashboard = () => {
    const [searchValue, setSearchValue] = useState("");
    const [users, setUsers] = useState([]);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        const controller = new AbortController();

        const fetchUsersApi = async () => {
            setError(null);
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }
                const data = await response.json();
                setUsers(data);
                setUserList(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUsersApi();

        return () => {
            controller.abort();
        }
    }, []);

    const handleSearchUser = (e) => {
        const userName = e.target.value;
        setSearchValue(userName);
        if (!userName.trim()) {
            setUserList(users);
            return;
        }
        const filteredUsersList = users.filter((user) =>
            user.name.toLowerCase().includes(userName.toLowerCase())
        );
        setUserList(filteredUsersList);
    };

    const onViewProfile = useCallback(()=> {
        console.log("onViewProfile Clicked")
    }, [])

    const onDeleteUser = useCallback(()=> {
        console.log("onDeleteUser Clicked")
    }, [])

    return (
        <div className="user-dashboard">
            <h3>User Dashboard</h3>
            <div>
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search User"
                    onChange={handleSearchUser}
                />
            </div>
            <UserProfile userList={userList} loading={loading} error={error} />
            <UserActions onViewProfile={onViewProfile} onDeleteUser={onDeleteUser} />
        </div>
    )
}
