export const UserThumbnail = ({ user }) => {
    return (
        <div className="user-container">
            <p>👤 {user.firstName} {user.lastName}</p>
            <p>📧 {user.email}</p>
            <p>🏢 {user.company?.name ?? "NA"}</p>
            <p>📍 {user?.address?.city ?? "N/A"}</p>
        </div>
    )
}
