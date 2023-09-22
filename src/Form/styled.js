import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  margin: 5px;
  line-height: 1.5;
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  background-color: hsl(56, 38%, 61%);
  border-style: none;
  border-radius: 10px;
  box-shadow: 10px -10px 19px -7px;
  height: 420px;
  padding: 0 0 14px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: 100%;
  }
`;

export const Legend = styled.legend`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.coral};
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const LabelText = styled.span`
  width: 160px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 5px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  max-width: 200px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.bisque};
  border: 1px solid ${({ theme }) => theme.color.gray};
  font-weight: bold;
`;

export const Currency = styled.select`
  padding: 5px 0;
  max-width: 300px;
  border-radius: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.bisque};
  border: 1px solid ${({ theme }) => theme.color.gray};
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.selectMode}px) {
    width: 200px;
  }
`;
