import { Outlet } from 'react-router-dom';
import { StyledNavLink } from '../components/NavbarStyles';

export const StylesLayout = () => {
    return (
        <div>
            <nav>
                <StyledNavLink to="product-card">Product Card</StyledNavLink>
                <StyledNavLink to="user-card">User Card</StyledNavLink>
            </nav>
            <Outlet />
        </div>
    )
}
