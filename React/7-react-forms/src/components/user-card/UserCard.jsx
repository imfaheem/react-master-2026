import { ButtonWrapper, StyledButton } from "../Button";
import "./user-styles.scss";

export const UserCard = () => {
    return (
        <div className="user-card">
            <div className="user-card-avatar-wrapper">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="User Profile"
                />
            </div>
            
            <div className="user-card-content">
                <span className="user-card-role">Software Engineer</span>
                <h2 className="user-card-name">John Doe</h2>
                <p className="user-card-email">john.doe@example.com</p>
                <p className="user-card-bio">
                    Passionate frontend developer obsessed with building modern React user interfaces and UI animations.
                </p>
                <div className="user-card-location">
                    <span className="user-card-location-icon">📍 Location:</span>
                    <span className="user-card-location-text">Karachi, Pakistan</span>
                </div>
                <ButtonWrapper>
                    <StyledButton variant="primary">View Profile</StyledButton>
                    <StyledButton variant="danger" $danger>Back to main</StyledButton>
                </ButtonWrapper>
            </div>
        </div>
    )
}
