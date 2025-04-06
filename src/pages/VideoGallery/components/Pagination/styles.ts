import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  color: ${({ theme }) => theme.colors.Dark};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.Green500 : "#eee"};
`;

export const Ellipsis = styled.span`
  user-select: none;
  padding: 0 6px;
`;
