import styled from "styled-components";

import { devices } from "@utils/styles";

export const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  margin-top: 1px;

  background-color: ${({ theme }) => theme.colors.Neutrals100};
  padding: 16px;
  border-radius: 0px 0px 4px 4px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0px 4px 4px 0px #00000040;

  @media screen and (${devices.mobileL}) {
    display: none;
  }
`;
