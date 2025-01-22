import styled from 'styled-components';


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  // გვერდის სრული სიმაღლე
  background-color: rgba(0, 0, 0, 0.1);  // მსუბუქი ბნელება
`;


export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #007bff;  // იმ ფერი, რომელიც უნდა გამოჩნდეს
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
