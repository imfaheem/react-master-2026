export const UserProfile = ({ userList, loading, error }) => {
    console.log("User Profile Child re-renders");

    return (
        <div className="user-profile">
            <p>User Profile</p>
            {loading && <p>Loading Users...</p>}
            {error && <p>{error}</p>}
            {userList.length ? (!loading && !error && userList?.map(user => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user?.role ?? "NA"}</p>
                </div>
            ))) : (
                <p>No User with searched name is available.</p>
            )}
        </div>
    )
}
