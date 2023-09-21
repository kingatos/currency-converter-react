import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  border-radius: 50%;
  border: 3px solid #fff;
  border-top-color: #0f9d58;
  font-weight: 100;
  width: 64px;
  height: 64px;
  animation: ${spin} 1s ease-in-out infinite;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.color.capeCod};
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  @media (max-width: 425px) {
    margin-top: 2rem;
  }
`;

export const LoadingText = styled.p`
  padding: 0px;
`;
