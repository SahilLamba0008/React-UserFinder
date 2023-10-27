import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: ${({theme})=>theme.colors.primary};
}
.btn{
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 10px;
  background: ${({ theme }) => theme.colors.primary};
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
}
`;
