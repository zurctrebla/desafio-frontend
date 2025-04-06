import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.Dark};
  padding: 14px 18px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    @media screen and (${devices.mobileL}) {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (${devices.laptop}) {
    padding: 12px 42px;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  width: 33%;

  img {
    cursor: pointer;
  }

  span {
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
  }

  @media screen and (${devices.tablet}) {
    width: auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 2px;

  button {
    width: 40px;
    height: 40px;
  }

  @media screen and (${devices.mobileL}) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${devices.mobileL}) {
    display: none;
  }

  @media screen and (${devices.laptop}) {
    width: 45%;
  }
`;

export const SearchContainer = styled.div<{ isFilterSectionOpen: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  border-radius: ${({ isFilterSectionOpen }) =>
    isFilterSectionOpen ? "4px 4px 0px 0px" : "4px"};

  height: 40px;
  max-width: 600px;
  width: 100%;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.Neutrals100};
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 90%;
  padding-left: 16px;

  color: ${({ theme }) => theme.colors.Neutrals800};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: ${pxToRem(19)};

  opacity: 0.7;
`;
