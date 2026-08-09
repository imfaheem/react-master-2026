import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: normal;
    display: inline-block;
    margin: 10px;
    &.active {
        text-decoration: underline;
        font-weight: bold;
        color: #000;
    }
`;
