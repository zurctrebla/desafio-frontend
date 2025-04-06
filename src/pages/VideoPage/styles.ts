import { devices } from "@utils/styles";
import styled from "styled-components";

export const Container = styled.div`
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 80px;

  @media screen and (${devices.tablet}) {
    padding: 40px;
  }

  @media screen and (${devices.mobileL}) {
    padding: 24px;
  }
`;

export const Thumbnail = styled.div<{ bgImage: string }>`
  background: ${({ theme }) => theme.colors.Neutrals100};
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  font-size: ${({ theme }) => theme.fonts.styles[16]};

  h2 {
    color: ${({ theme }) => theme.colors.Blue500};
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }
`;
