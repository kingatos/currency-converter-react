import styled from "styled-components";

export const ButtonArea = styled.p`
    padding:5px 0px;
`;

export const Button = styled.button`
    padding: 8px 20px;
    margin-right: 15px;
    background-color: hsl(70, 199%, 89%);
    border-radius: 5px;
    border-top: 5px;
    border-left: 5px;
    font-weight: bold;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
    background-color: hsl(17, 100%, 81%);
    transform: scale(1.1);
    }

    &:active {
    background-color: hsl(17, 55%, 38%);
    transform: scale(1.1);
    }
`;