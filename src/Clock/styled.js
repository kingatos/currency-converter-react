import styled from "styled-components";

export const Wrapper = styled.p`
    padding: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    text-align: right;
    color: ${({ theme }) => theme.color.capeCod};
`;