import styled from "styled-components";
import { devices } from "@utils/styles";

export const Container = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.Neutrals0};
  height: 100%;
`;

export const FilterBar = styled.div`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const VideoList = styled.div<{ viewMode: "grid" | "list" }>`
  display: grid;
  grid-template-columns: ${({ viewMode }) =>
    viewMode === "grid" ? "repeat(4, 1fr)" : "1fr"};
  gap: 20px;

  margin-top: 16px;
  transition: all 0.3s ease;

  @media screen and (${devices.tablet}) {
    grid-template-columns: ${({ viewMode }) =>
      viewMode === "grid" ? "repeat(2, 1fr)" : "1fr"};
  }

  @media screen and (${devices.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.div<{ viewMode: "grid" | "list" }>`
  display: flex;
  flex-direction: ${({ viewMode }) => (viewMode === "list" ? "row" : "column")};
  gap: 12px;
  align-items: ${({ viewMode }) =>
    viewMode === "list" ? "center" : "stretch"};
  border-radius: 4px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;

  button {
    background: #eee;
    border: none;
    padding: 6px 10px;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.colors.Green500};
      color: white;
    }
  }

  span {
    margin-left: 12px;
    font-size: ${({ theme }) => theme.fonts.styles[14]};
  }
`;

export const Thumbnail = styled.div<{
  viewMode: "grid" | "list";
  bgImage: string;
}>`
  background: ${({ theme }) => theme.colors.Neutrals100};
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ viewMode }) => (viewMode === "list" ? "240px" : "100%")};
  aspect-ratio: ${({ viewMode }) => (viewMode === "list" ? "auto" : "16 / 9")};
  height: ${({ viewMode }) => (viewMode === "list" ? "135px" : "auto")};
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.Green500};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
`;

export const Author = styled.span`
  margin-bottom: 4px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Meta = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.fonts.styles[12]};
`;
