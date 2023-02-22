import styled from "styled-components";

export const Wrapper = styled.p`
    padding: 0 20px 10px 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    text-align: right;
    color: ${({ theme }) => theme.color.black};
    border-bottom-style: double;
`;