import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { UserThumbnail } from "./UserThumbnail";

export const UserSearch = ({ handleSearchInput }) => {
    const { users, searchTerm } = useContext(UsersContext);

    const searchName = searchTerm.trim().toLowerCase();
    const filteredUsers = users.filter(user => 
        `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(searchName)
    );

    return (
        <section className="flex-1">
            <div className="mb-10">Search User: 
                <input type="text" value={searchTerm} onChange={handleSearchInput} placeholder="Search User Name" />
            </div>
            {searchTerm === "" ? (
                <h4>No users available...</h4>
            ) :
            (
                filteredUsers.length > 0 ?
                    filteredUsers.map(user => (
                        <UserThumbnail key={user.id} user={user} />
                    )) : (
                        <p>"No matching users found."</p>
                    )
            )}            
        </section>
    )
}
