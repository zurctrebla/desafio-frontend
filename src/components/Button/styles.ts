import styled from "styled-components";

import theme from "src/theme/theme";

export const Container = styled.button<{
  bcColor?: string;
  textColor?: string;
  hasIcon?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  padding: 10px;
  background-color: ${({ bcColor }) =>
    bcColor || theme.colors.Neutrals0} !important;
  border: none;
  outline: none;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${theme.fonts.styles[16]};
  font-weight: ${theme.fonts.weight.bold};
  line-height: normal;
  color: ${({ textColor }) => textColor || theme.colors.Neutrals500};

  img {
    width: 20px;
    height: 20px;
  }
`;
