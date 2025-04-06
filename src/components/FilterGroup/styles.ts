import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  margin-right: 36px;
  width: 100px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  cursor: pointer;

  width: 100px;
`;

export const Checkbox = styled.div`
  width: 30px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.Green500};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxText = styled.span`
  height: 22px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 4px 8px;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme }) => theme.colors.Neutrals900};
  background-color: ${({ theme }) => theme.colors.Neutrals200};
`;

export const Checkmark = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.fonts.styles[14]};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
