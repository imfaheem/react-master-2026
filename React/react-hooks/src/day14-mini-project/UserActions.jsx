import { memo } from "react";

export const UserActions = memo(({ onViewProfile, onDeleteUser }) => {
    console.log( "User Actions Child re-rendered");

    return (
        <section>
            <p>User Actions</p>
            <button onClick={onViewProfile}>View Profile</button>
            <button onClick={onDeleteUser}>Delete User</button>
        </section>
    );
})
