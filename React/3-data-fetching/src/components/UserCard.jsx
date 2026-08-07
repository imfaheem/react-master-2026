import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { UserThumbnail } from "./UserThumbnail";

export const UserCard = () => {
    const { users } = useContext(UsersContext);

    return (
        <section className="flex-1">
            <h3>
                ----------------------------------------
                <br /> Users Directory <br />
                ----------------------------------------
            </h3>
            {(!users.length) ? (
                <h4>No user available...</h4>
            ) : (
                users.map(user => (
                    <UserThumbnail key={user.id} user={user} />
                ))
            )}
        </section>
    )
}
