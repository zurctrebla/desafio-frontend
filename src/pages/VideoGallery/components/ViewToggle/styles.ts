import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  display: flex;
  gap: 4px;

  button {
    background: ${({ theme }) => theme.colors.Neutrals0};
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
