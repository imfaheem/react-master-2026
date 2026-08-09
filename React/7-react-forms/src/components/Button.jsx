import styled from "styled-components";

export const ButtonWrapper = styled.div`
    justify-content: space-between;
    display: flex;
`;

export const StyledButton = styled.button`
    transition: all 0.3s ease-in-out;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    opacity: 0.85;
    background-color: ${({variant}) => variant === "primary" ? "skyblue" : "red"};
    &:hover {
        opacity: 1;
        color: ${(props) => props.$danger ? "#fff" : "#333"}
    }
`;

